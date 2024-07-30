import React, { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { app } from './FirebaseConfig';
import { child, get, getDatabase, ref } from 'firebase/database';


export const myContext = createContext();

const Context = ({children}) => {

  const [ifAdminLoggedIn, setAdminLoggedIn] = useState(false);
  const [quizzData, setQuizzData] = useState([]);

  const ifLogin = ()=>{
     const admindata =  Cookies.get('admin-data');

     if(!admindata) return

     setAdminLoggedIn(true);
  }

  useEffect(()=>{ifLogin()},[]);
  
    const z = '10';

    const readdata =async ()=>{
      const db = ref(getDatabase(app));
      const response = await get(child(db, 'ques'));
      const data = response.val();

      const allIds = Object.keys(data);

      const alldata = [];
      allIds.forEach((id)=>{
        // const newObj = {}

        const newdata = data[id]
        newdata.idd = id
        alldata.push(newdata);
      });



      setQuizzData(alldata);
    }

    useEffect(()=>{readdata()},[]);
  return (
    <myContext.Provider value={{z, ifAdminLoggedIn, setAdminLoggedIn, readdata, quizzData}}>
        {children}
    </myContext.Provider>
  )
}

export default Context