import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function App() {
  const nav = useNavigate();

  const checkIfLoggedIn = ()=>{
    const cookieData = Cookies.get('admin-wsb-104-98');

    if(cookieData){
      nav('/dashboard');
    }
  };

  useEffect(()=>{checkIfLoggedIn()},[]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    try{
      const response = await axios.post('http://localhost:5200/api/admin-panel/admin/log-in', formData);
      
      if(response.status === 200){
        Cookies.set('admin-wsb-104-98', JSON.stringify(response.data.data), { expires: 7 })
        nav('/dashboard');
      }
    }
    catch(error){
      console.log(error);
      alert('something went wrong');
    }
  };


  return (
    <div className="mx-auto my-[100px] bg-white rounded-[10px] w-[40%] h-[400px] p-[20px] border">
      <h1 className="text-[#303640] font-semibold text-[40px] mt-[30px] p-[0_10px]">
        Login
      </h1>
      <h3 className="text-[#303640c2] text-[14px] p-[0_10px] mb-[30px]">
        Sign-in to your account
      </h3>
      <form onSubmit={handleLogin}>
        <div className="w-full  grid grid-cols-[20%_auto] my-[10px]">
          <label htmlFor="name" className="py-[8px] px-[10px] text-[#303640]">
            User Name
          </label>
          <input
            name="email"
            id="name"
            type="text"
            placeholder="Enter your email"
            className="p-[10px] rounded-[5px] border input"
          />
        </div>
        <div className="w-full  grid grid-cols-[20%_auto] my-[10px]">
          <label
            htmlFor="password"
            className="py-[8px] px-[10px] text-[#303640]"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            className="p-[10px] input border rounded-[5px]"
          />
        </div>
        <div className="w-full my-[50px] flex justify-between items-center">

            <button
              type="submit"
              className="w-[130px] bg-purple-600 text-white h-[40px] rounded-[5px] text-[18px] font-[400]"
            >
              Login
            </button>
          <Link to="/reset-password">
            <span className="text-[#5351c9] mr-[50px]">Forgot password?</span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default App;
