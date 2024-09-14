import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const ViewCategory = () => {
  let [show1, setShow1] = useState(false);
  let [show2, setShow2] = useState(false);
  let [show3, setShow3] = useState(false);
  let [show4, setShow4] = useState(false);

  const [parentCats, setParentCats] = useState([]);
  const [selectedId, setSelectedId] = useState([]);
  const [ifAllChecked, setIfAllChecked] = useState(false);

  const fetchParentCategories = async () => {
    try {
      const response = await axios
        .get('http://localhost:5200/api/admin-panel/parent-category/read-parent-categories');

      console.log(response.data.data);
      if (response.status !== 200) return alert('something wrong');
      setParentCats(response.data.data)


      // alert('parent category added');
      // nav('/dashboard/category/view-category');

    }
    catch (error) {
      console.log(error);
      alert('something went wrong');
    }
  }


  useEffect(() => { fetchParentCategories() }, []);

  const handleStatus = async (e) => {
    const newValue = (e.target.textContent === 'Active') ? false : true;


    try {
      const response = await axios
        .put(`http://localhost:5200/api/admin-panel/parent-category/update-status/${e.target.value}`, {
          newValue
        });

      if (response.status !== 200) return alert('something wrong');
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });

      const indexNo = parentCats.findIndex((parentCat) => parentCat._id === e.target.value);

      const newData = [...parentCats]
      newData[indexNo].status = newValue

      setParentCats(newData);
    }
    catch (error) {
      console.log(error);
      alert('something went wrong');
    }

  };


  const handleDelete = async (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "x",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })
      .then((result) => {
        if (result.isConfirmed) {
          try {
             axios
              .delete(`http://localhost:5200/api/admin-panel/parent-category/delete-parentcategory/${_id}`)
              .then((response)=>{
                
            if (response.status !== 200) return alert('something wrong');

            const indexNo = parentCats.findIndex((parentCat) => parentCat._id === _id);
            const newData = [...parentCats]
            newData.splice(indexNo, 1);

            setParentCats(newData);
              })

          }
          catch (error) {
            console.log(error);
            alert('something went wrong');
          }
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });


    // try{
    //   const response = await axios
    //   .delete(`http://localhost:5200/api/admin-panel/parent-category/delete-parentcategory/${_id}`);

    //   if(response.status !== 200) return alert('something wrong');
    //   alert('Category deleted');

    //   const indexNo = parentCats.findIndex((parentCat)=> parentCat._id === _id);
    //   const newData = [...parentCats]
    //   newData.splice(indexNo, 1);

    //   setParentCats(newData);
    // }
    // catch(error){
    //   console.log(error);
    //   alert('something went wrong');
    // }
  };

  const handleDeleteChecked = async () => {
    if (!window.confirm('Are you sure to delete')) return

    console.log(selectedId);

    try {
      const response = await axios
        .post('http://localhost:5200/api/admin-panel/parent-category/multi-delete-parent-category',
          { ids: selectedId }
        );


      console.log(response.data);

      if (response.status === 200) {
        alert('Data deleted successfully');
      }

      setSelectedId([]);
      // setIfAllChecked(false)

      fetchParentCategories();
    }
    catch (error) {
      console.log(error);
      alert('Something went wrong');
    }
  }


  const handleCheckInput = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      const newArr = [...selectedId];
      newArr.push(value);
      setSelectedId(newArr);
    }
    else {
      const newArr = [...selectedId].filter((id) => id != value);
      setSelectedId(newArr);

    }
  };

  const handleSelectAll = (e) => {

    if (e.target.checked) {
      const allIds = parentCats.map((category) => category._id);
      setSelectedId(allIds);
      setIfAllChecked(true)
    }
    else {
      setSelectedId([]);
      setIfAllChecked(false)
    }

  };

  useEffect(() => {
    setIfAllChecked(selectedId.length === parentCats.length && parentCats.length !== 0);
  }, [selectedId, parentCats]);

  return (
    <div className="w-[90%] mx-auto my-[150px] bg-white rounded-[10px] border">
      <span className="block h-[40px] bg-[#f8f8f9] text-[20px] text-[#303640] p-[8px_16px] border-b rounded-[10px_10px_0_0]">
        View Category
      </span>
      <div className="w-[90%] mx-auto my-[20px]">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th>
                <button
                  className="bg-red-400 rounded-sm px-2 py-1"
                  onClick={handleDeleteChecked}
                >Delete</button>
                <input
                  type="checkbox"
                  name="deleteAll"
                  id="deleteAllCat"
                  checked={ifAllChecked}
                  className="accent-[#5351c9]"
                  onClick={handleSelectAll}
                />
              </th>
              <th>Sno</th>
              <th>Category Name</th>
              <th>Description</th>
              <th>Action</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              parentCats.map((parentCategory, index) => (
                <tr className="border-b" key={index}>
                  <td>
                    <input
                      type="checkbox"
                      name="delete"
                      id="delete1"
                      checked={selectedId.includes(parentCategory._id)}
                      className="accent-[#5351c9] cursor-pointer"
                      value={parentCategory._id}
                      onClick={handleCheckInput}
                    />
                  </td>
                  <td>{index + 1}</td>
                  <td>{parentCategory.name}</td>
                  <td className="w-[200px] flex-wrap p-1">
                    {" "}
                    {parentCategory.description}{" "}
                    <span
                      onClick={() => setShow1(!show1)}
                      className={
                        show1 === true ? "hidden" : "font-bold cursor-pointer"
                      }
                    >
                      ...Read
                    </span>
                    {show1 === false ? (
                      " "
                    ) : (
                      <span>
                        Deserunt nam est delectus itaque sint harum architecto.
                      </span>
                    )}
                  </td>
                  <td>
                    <MdDelete className="my-[5px] text-red-500 cursor-pointer inline" onClick={() => { handleDelete(parentCategory._id) }} />{" "}
                    |{" "}
                    <Link to={`/dashboard/category/update-category/${parentCategory._id}`}>
                      <CiEdit className="my-[5px] text-yellow-500 cursor-pointer inline" />
                    </Link>
                  </td>
                  <td>
                    <button
                      value={parentCategory._id}
                      onClick={handleStatus}
                      className={`p-[4px_10px] rounded-sm ${(parentCategory.status) ? 'bg-green-500' : 'bg-red-400'} text-white`}
                    >
                      {(parentCategory.status) ? 'Active' : 'Inactive'}
                    </button>
                  </td>
                </tr>
              ))
            }


          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewCategory;
