import React, { useContext } from 'react'
import { myContext } from '../assests/Context'
import { getDatabase, ref, set } from "firebase/database";
import { app } from '../assests/FirebaseConfig';

const Home = () => {

  // const db = getDatabase(app);
  // const data = ref(db, 'admins/' + Math.floor(Math.random() * 999999 * 100000));

  // set(data, {
  //   email:'admin@test.com',
  //   password: 'password@123'
  // });

  const {z} = useContext(myContext);
  console.log(z);
  return (
    <div>Home</div>
  )
}

export default Home