import { child, get, getDatabase, ref } from 'firebase/database';
import React from 'react'
import { app } from '../assests/FirebaseConfig';

const Login = () => {
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const db = ref(getDatabase(app));
      const response = await get(child(db, 'admins'));
      const data = response.val();

      const adminId = Number(Object.keys(data)[0]);
     const databaseUser = (data[adminId]);

     console.log(data);

      if(e.target.email.value !== databaseUser.email) return alert('Invalid Email');
      if(e.target.password.value !== databaseUser.password) return alert('Invalid Password');

      const adminData = {
        id: adminId,
        eamil:databaseUser.email
      };

      // console.log(response.val());
    }
    catch (error) {
      console.log(error);
      alert('Something went wrong');
    }

    // console.log(e.target.email.value);
  };

  return (
    <div className='grid place-items-center h-[100vh]'>
      <div className='p-[40px] rounded-xl bg-[whitesmoke]'>
        <form onSubmit={handleLogin}>
          <input name="email" className='block p-[8px] border border-black rounded-md' type='text' placeholder='email' />
          <input name="password" className='block p-[8px] border border-black rounded-md my-[20px]' type='password' placeholder='password' />
          <button
            className='w-[100%] p-[6px] bg-[olive] rounded text-white font-[500]'

          >Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login