import React, { useEffect, useState } from "react";
import { RiFacebookFill } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Profile() {
  const nav = useNavigate();
  const [show, setShow] = useState(false);
  const [adminData, setAdminData] = useState({});
  const [ifOtp, setIfOtp] = useState(false);
  const [otpBtnText, setOtpBtnText] = useState('Generate OTP');
  const [ imgPres, setImgPres ] = useState({});

  const getAdminData = () => {
    
    let cookieData = Cookies.get('admin-wsb-104-98');

    if (cookieData) {

      cookieData = JSON.parse(cookieData);
      setAdminData(cookieData[0]);

      console.log(cookieData[0]);
    }
  };

  useEffect(() => { getAdminData() }, []);

  const handleGenrateOtp = async () => {
    console.log(adminData);
    let otpTimer = 60;
    setOtpBtnText(`Regenrate OTP in ${otpTimer}s`);

    const timerInterval = setInterval(() => {
      otpTimer--;
      setOtpBtnText(`Regenrate OTP in ${otpTimer}s`);

      if (otpTimer === 0) {
        clearInterval(timerInterval);
        setOtpBtnText('Generate OTP');
        setIfOtp(false);
      }

    }, 1000);
    setIfOtp(true);


    try {
      const response = await axios.post('http://localhost:5200/api/admin-panel/admin/genrate-otp', adminData);

      if (response.status !== 200) return alert('something went wrong');
      console.log(response.data);

      alert('Otp has sent on your mail');
    }
    catch (error) {
      console.log(error);
      alert('something went wrong');
    }
  };

  const hanldeUpdateEmail = async () => {
    try {
      const response = await axios
        .post(`http://localhost:5200/api/admin-panel/admin/update-email/${adminData._id}`,
          adminData);
      console.log(response);
      if (response.status !== 200) return alert('Something went wrong');

      alert('Emal has updated');

      Cookies.remove('admin-wsb-104-98');
      nav('/login');
    }
    catch (error) {
      console.log(error);
      alert('Please after some time')
    }
  };

  const handleFileSelect = (e)=>{
    const fieldname = e.target.name;


      const reader = new FileReader();
  
  
      const file = e.target.files[0];
  
      if(file){
        reader.readAsDataURL(file);
      }
  
      reader.onload = ()=>{
        // setImgPres({...imgPres,fieldname: reader.result })

        setImgPres((prevState)=>({...prevState, [fieldname]:reader.result}));
      }

  };

  const handleUpdateAdmin =async (e)=>{
    e.preventDefault();

    const data = e.target;
    try{
     const response =  await axios
     .put(`http://localhost:5200/api/admin-panel/admin/update-admin/${adminData._id}`, data);

     console.log(response);

     if(response.status !== 200) return alert('something wrong')
      alert('Admin has updated, please log in again')
     Cookies.remove('admin-wsb-104-98');
     nav('/login');
    }
    catch(error){
      console.log(error);
      alert('something went wrong');
    }


  };

  return (
    <div>
      <div className="w-[90%] mx-auto mt-[140px] mb-[20px] bg-white border rounded-[10px]">
        <span className="block text-[#303640] bg-[#f8f8f9] rounded-[10px_10px_0_0] h-[60px] p-[15px_15px] box-border font-bold text-[25px] border-b">
          Profile
        </span>
        <div className="w-full grid grid-cols-[2fr_2fr]">
          <div className="p-[10px]">
            <form onSubmit={handleUpdateAdmin}>
              <div className="w-full ">
                <span className="block m-[15px_0]">Name</span>
                <input
                  type="text"
                  value={adminData.name}
                  name="name"
                  onChange={(e)=>{setAdminData({...adminData, name: e.target.value })}}
                  className="w-full border h-[35px] rounded-[5px] p-2 input"
                />
              </div>
              <div className="w-full ">
                <span className="block m-[15px_0]">Social Link</span>
                <div className="w-full grid grid-cols-[10%_auto] mb-[10px]">
                  <span className="w-full h-full text-[20px] p-[8px]">
                    <RiFacebookFill />
                  </span>
                  <input
                    type="text"
                    value={adminData.fb}
                  name="fb"
                  onChange={(e)=>{setAdminData({...adminData, fb: e.target.value })}}
                    className="w-full border h-[35px] rounded-[5px] p-2 input"
                  />
                </div>
                <div className="w-full grid grid-cols-[10%_auto] mb-[10px]">
                  <span className="w-full h-full text-[20px] p-[8px]">
                    <CiInstagram />
                  </span>
                  <input
                    type="text"
                    value={adminData.instagram}
                  name="instagram"
                  onChange={(e)=>{setAdminData({...adminData, instagram: e.target.value })}}
                    className="w-full border h-[35px] rounded-[5px] p-2 input"
                  />
                </div>
                <div className="w-full grid grid-cols-[10%_auto] mb-[10px]">
                  <span className="w-full h-full text-[20px] p-[8px]">
                    <FaYoutube />
                  </span>
                  <input
                    type="text"
                    value={adminData.youtube}
                  name="youtube"
                  onChange={(e)=>{setAdminData({...adminData, youtube: e.target.value })}}
                    className="w-full border h-[35px] rounded-[5px] p-2 input"
                  />
                </div>
                <div className="w-full grid grid-cols-[10%_auto] mb-[10px]">
                  <span className="w-full h-full text-[20px] p-[8px]">
                    <FaXTwitter />
                  </span>
                  <input
                    type="text"
                    value={adminData.twitter}
                  name="twitter"
                  onChange={(e)=>{setAdminData({...adminData, twitter: e.target.value })}}
                    className="w-full border h-[35px] rounded-[5px] p-2 input"
                  />
                </div>
              </div>
              <div className="w-full my-[20px]">
                <span className="block m-[15px_0]">Logo</span>
                <div className="w-[50px] h-[50px] object-fill">
                  <img src={imgPres.logo || adminData.logo} alt="Logo" className="w-full h-full" />
                </div>
                <input
                  type="file"
                  name="logo"
                  className="input border w-full m-[10px_0] category"
                  onChange={handleFileSelect}
                />
              </div>
              <div className="w-full my-[20px]">
                <span className="block m-[15px_0]">Fav Icon</span>
                <div className="w-[50px] h-[50px] object-fill">
                  <img
                    src={imgPres.favicon}
                    alt="Logo"
                    className="w-full h-full"
                  />
                </div>
                <input
                  type="file"
                  name="favicon"
                  onChange={handleFileSelect}
                  className="input border w-full m-[10px_0] category"
                />
              </div>
              <div className="w-full my-[20px]">
                <span className="block m-[15px_0]">Footer Logo</span>
                <div className="w-[50px] h-[50px] object-fill">
                  <img
                   src={imgPres.footer_icon}
                    alt="Logo"
                    className="w-full h-full"
                  />
                </div>
                <input
                  type="file"
                  name="footer_icon"
                  className="input border w-full m-[10px_0] category"
                  onChange={handleFileSelect}
                />
              </div>
              <div className="w-full my-[20px] relative ">
                <span className="block m-[15px_0]">Password</span>
                <input
                  type={show === false ? "password" : "text"}
                  value={adminData.password}
                  name="password"
                  onChange={(e)=>{setAdminData({...adminData, password: e.target.value })}}
                  className="w-full border h-[35px] rounded-[5px] p-2 input"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-[20px] bottom-[10px] cursor-pointer text-[#303640]"
                >
                  {show === false ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              <button type="submit" className="w-[150px] h-[40px] rounded-md text-white bg-[#5351c9] my-[30px]">
                Update
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-center p-[10px] box-border items-center gap-[10px] h-[400px]">
            <div className="border border-slate-300 w-[200px] h-[200px] rounded-[50%] object-contain">
              <img
                src="/profile.jpg"
                alt="profile img"
                className="w-full h-full rounded-[50%]"
              />
            </div>
            <span className="block text-center">Profile Image</span>
          </div>
        </div>
      </div>
      <div className="mb-[80px] w-[90%] mx-auto border rounded-[10px]">
        <span className="block text-[#303640] bg-[#f8f8f9] rounded-[10px_10px_0_0] h-[60px] p-[15px_15px] box-border font-bold text-[25px] border-b">
          Update Email
        </span>
        <div className="w-full p-[30px]">
          <form method="post">
            <div className="w-full mb-[10px]">
              <span className="block m-[15px_0]">Current Email</span>
              <input
                type="email"
                value={adminData.email}
                onChange={(e) => { setAdminData({ ...adminData, email: e.target.value }) }}
                className="w-full border h-[35px] rounded-[5px] p-2 input"
              />
            </div>
            <div className="w-full mb-[10px]" style={{ display: (ifOtp) ? '' : 'none' }}>
              <span className="block m-[15px_0]">OTP</span>
              <input
                type="text"
                placeholder="Enter OTP"
                name='userotp'
                onChange={(e) => { setAdminData({ ...adminData, userotp: e.target.value }) }}
                className="w-full border h-[35px] rounded-[5px] p-2 input"
              />
              <input
                type="text"
                placeholder="Enter new email"
                name='newemail'
                onChange={(e) => { setAdminData({ ...adminData, newemail: e.target.value }) }}
                className="w-full border h-[35px] rounded-[5px] p-2 input"
              />
            </div>
            <button
              type="button"
              onClick={handleGenrateOtp}
              disabled={ifOtp}
              className={`w-[150px] h-[40px] rounded-md text-white ${(!ifOtp) ? 'bg-[#5351c9]' : 'bg-[grey]'}  my-[30px]`}>
              {otpBtnText}
            </button>

            <button
              onClick={hanldeUpdateEmail}
              type="button"
              style={{ display: (!ifOtp) ? 'none' : '' }}
              className={`w-[150px] block h-[40px] rounded-md text-white bg-[#5351c9]  my-[30px]`}>
              Update Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
