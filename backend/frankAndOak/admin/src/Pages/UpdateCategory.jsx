import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateCategory = () => {
  const nav = useNavigate();

  const {_id} = useParams();

  const [category, setCategory] = useState({});

 


  const hendleFetchCategory = async()=>{


     if(!_id) return nav('/dashboard/category/view-category');
    try{
      const response = await axios
      .get(`http://localhost:5200/api/admin-panel/parent-category/read-category-by-id/${_id}`);

      setCategory(response.data.data);
      console.log(response.data.data);
      if(response.status !== 200) return alert('something wrong');


    }
    catch(error){
      console.log(error);
      alert('something went wrong');
    }
  }

  useEffect(()=>{hendleFetchCategory();},[]);

  const handleUpdateParent = async(e)=>{
    e.preventDefault();

    // console.log(process.env.REACT_APP_SAMPLE);

    try{
      const response = await axios
      .put(`http://localhost:5200/api/admin-panel/parent-category/update-parent-category/${category._id}`, category);

      if(response.status !== 200) return alert('something wrong');
      alert('Category updated');
      nav('/dashboard/category/view-category');

    }
    catch(error){
      console.log(error);
      alert('something went wrong');
    }
  };

  return (
    <div className="w-[90%] mx-auto my-[150px] bg-white border rounded-[10px]">
      <span className="bg-[#f8f8f9] rounded-[10px_10px_0_0] border-b p-[8px_16px] text-[20px] font-bold block text-[#303640]">
        Update Category
      </span>
      <div className="w-[90%] mx-auto my-[20px]">
        <form onSubmit={handleUpdateParent}>
          <div className="w-full my-[10px]">
            <label htmlFor="categoryName" className="block text-[#303640]">
              Category Name
            </label>
            <input
              type="text"
              name="name"
              onChange={(e)=>{setCategory({...category, name:e.target.value})}}
              id="categoryName"
              placeholder="Category Name"
              value={category.name}
              className="input border p-1 w-full rounded-[5px] my-[10px]"
            />
          </div>
          {/* <div className="w-full my-[10px]">
            <label htmlFor="categoryImg" className="block text-[#303640]">
              Category Image
            </label>
            <input
              type="file"
              name="categoryImg"
              id="categoryImg"
              className="input border w-full rounded-[5px] my-[10px] category"
            />
          </div> */}
          <div className="w-full my-[10px]">
            <label htmlFor="categoryDesc" className="block text-[#303640]">
              Category Description
            </label>
            <textarea
              type="file"
              name="description"
              id="categoryDesc"
              onChange={(e)=>{setCategory({...category, description:e.target.value})}}
              value={category.description}
              className="input border w-full rounded-[5px] my-[10px]"
            />
          </div>
          {/* <div className="w-full my-[10px]">
            <label
              htmlFor="categoryStatus"
              className=" text-[#303640] mr-[20px]"
            >
              Status
            </label>
            <input
              type="radio"
              name="categoryStatus"
              id="categoryStatus"
              value="0"
              className="input my-[10px] mx-[10px] accent-[#5351c9] cursor-pointer"
            />
            <span>Display</span>
            <input
              type="radio"
              name="categoryStatus"
              id="categoryStatus"
              value="1"
              checked
              className="input my-[10px] mx-[10px] accent-[#5351c9] cursor-pointer"
            />
            <span>Hide</span>
          </div> */}
          <div className="w-full my-[20px] ">
            <button className="bg-[#5351c9] rounded-md text-white w-[100px] h-[35px]">
              Update Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCategory;
