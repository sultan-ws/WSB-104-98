import React, { useContext, useEffect } from 'react'
import { myContext } from '../assests/Context';
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, set } from "firebase/database";
import { app } from '../assests/FirebaseConfig';

const Admin = () => {
    const nav = useNavigate();
    const { ifAdminLoggedIn, readdata } = useContext(myContext);

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
            co:e.target.co.value
        }

       try{
       for(let i = 1; i <= 50; i ++){
        const db = getDatabase(app);
        const data = ref(db, 'ques/' + Math.floor(Math.random() * 999999 * 100000));

        set(data, qdata);

        readdata();
       }
       }
       catch(error){
        console.log(error);
        alert('something went wrong')
       }
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
            </table>
           </div>
        </div>
    )
}

export default Admin