import React, { useContext, useEffect, useState } from 'react'
import { myContext } from '../assests/Context';
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, remove, set, update } from "firebase/database";
import { app } from '../assests/FirebaseConfig';

const Admin = () => {
    const nav = useNavigate();
    const { ifAdminLoggedIn, readdata, quizzData } = useContext(myContext);
    const [dataToUpdate, setDataToUpdate] = useState({});
    const [popUp, setPopUp] = useState('scale(0)');


    useEffect(() => {
        if (!ifAdminLoggedIn) return nav('/');
    })

    const handleSaveData = (e) => {
        e.preventDefault();

        const qdata = {
            q: e.target.q.value,
            a: e.target.o1.value,
            b: e.target.o2.value,
            c: e.target.o3.value,
            d: e.target.o4.value,
            co: e.target.co.value
        }

        try {

                const db = getDatabase(app);
                const data = ref(db, 'ques/' + Math.floor(Math.random() * 999999 * 100000));

                set(data, qdata);

                readdata();

        }
        catch (error) {
            console.log(error);
            alert('something went wrong')
        }
    };


    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure to delete')) return
        const db = getDatabase();
        remove(ref(db, `ques/${id}`));

        console.log(id);
        readdata();
    }


    const handleupdatedata = (e)=>{
        e.preventDefault();

        const {idd, ...restdata} = dataToUpdate;

        console.log(restdata);
        const db = getDatabase();
        update(ref(db, `ques/${dataToUpdate.idd}`), restdata);
        setPopUp('scale(0)')
        readdata();

    };

    return (
        <div className='grid grid-cols-[1fr_3fr] gap-[20px]'>
            <div>
                <form className='py-[20px] bg-[whitesmoke]' onSubmit={handleSaveData}>
                    <label className='block mt-2'>Question:</label>
                    <input name='q' type='text' placeholder='Add a question' />
                    <label className='block mt-2'>Option 1:</label>
                    <input name='o1' type='text' placeholder='Add an option' />
                    <label className='block mt-2'>Option 2:</label>
                    <input name='o2' type='text' placeholder='Add an option' />
                    <label className='block mt-2'>Option 3:</label>
                    <input name='o3' type='text' placeholder='Add an option' />
                    <label className='block mt-2'>Option 4:</label>
                    <input name='o4' type='text' placeholder='Add an option' />
                    <label className='block mt-2'>Correct option:</label>
                    <input name='co' type='text' placeholder='Add an option' />

                    <button className='block'>Add data</button>
                </form>
            </div>
            <div>
                <table className='border border-black'>
                    <thead>
                        <tr>
                            <th className='border border-black'>sr no.</th>
                            <th className='border border-black'>Quesiton</th>
                            <th className='border border-black'>option 1</th>
                            <th className='border border-black'>option 2</th>
                            <th className='border border-black'>option 3</th>
                            <th className='border border-black'>option 4</th>
                            <th className='border border-black'>
                                Correct option
                            </th>
                            <th className='border border-black'>
                                <button>Delete</button>
                            </th>
                            <th className='border border-black'>
                                <button>
                                    Update
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            quizzData.map((mcq, index) => (
                                <tr key={index}>
                                    <td className='border border-black'>{index + 1}</td>
                                    <td className='border border-black'>{mcq.q}</td>
                                    <td className='border border-black'>{mcq.a}</td>
                                    <td className='border border-black'>{mcq.b}</td>
                                    <td className='border border-black'>{mcq.c}</td>
                                    <td className='border border-black'>{mcq.d}</td>
                                    <td className='border border-black'>
                                        {mcq.co}
                                    </td>
                                    <td className='border border-black'>
                                        <button
                                            onClick={() => { handleDelete(mcq.idd) }}
                                        >Delete</button>
                                    </td>
                                    <td className='border border-black'>
                                        <button
                                        onClick={()=>{setPopUp('scale(1) translate(-50%, -50%'); setDataToUpdate(mcq)}}>
                                            Update
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <div className='w-[60vw] h-[40vh] bg-[red] fixed top-[50%] start-[50%] translate-x-[-50%] translate-y-[-50%]'
            style={{
                transform:popUp
            }}
            >
                <button className='absolute top-1 end-1 bg-red-500'
                onClick={()=>{setPopUp('scale(0) translate(-50%, -50%')}}
                >Close</button>
                <form className='py-[20px] bg-[whitesmoke]'>
                    <label className='block mt-2'>Question:</label>
                    <input name='q' value={dataToUpdate.q} type='text' placeholder='Add a question'
                    onChange={(e)=>{setDataToUpdate({...dataToUpdate, q:e.target.value})}}
                     />
                    <label className='block mt-2'>Option 1:</label>
                    <input name='a' value={dataToUpdate.a} type='text' placeholder='Add an option' 
                    onChange={(e)=>{setDataToUpdate({...dataToUpdate, a:e.target.value})}}
                    />
                    <label className='block mt-2'>Option 2:</label>
                    <input name='b' value={dataToUpdate.b} type='text' placeholder='Add an option'
                    onChange={(e)=>{setDataToUpdate({...dataToUpdate, b:e.target.value})}}
                     />
                    <label className='block mt-2'>Option 3:</label>
                    <input name='c' value={dataToUpdate.c} type='text' placeholder='Add an option' 
                    onChange={(e)=>{setDataToUpdate({...dataToUpdate, c:e.target.value})}}
                     />
                    <label className='block mt-2'>Option 4:</label>
                    <input name='d' value={dataToUpdate.d} type='text' placeholder='Add an option'
                    onChange={(e)=>{setDataToUpdate({...dataToUpdate, d:e.target.value})}}
                     />
                    <label className='block mt-2'>Correct option:</label>
                    <input name='co' value={dataToUpdate.co} type='text' placeholder='Add an option'
                    onChange={(e)=>{setDataToUpdate({...dataToUpdate, co:e.target.value})}} 
                     />

                    <button onClick={handleupdatedata} className='block'>Upadte data</button>
                </form>
            </div>
        </div>



    )
}

export default Admin