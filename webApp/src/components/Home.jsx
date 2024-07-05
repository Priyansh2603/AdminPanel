import React, { useContext, useEffect } from 'react'
import MultiActionAreaCard from './ImageSlider'
import Navbar from './Navbar'
import { AppState } from '../App'
import axios from 'axios';
import Cookies from 'js-cookie'
export default function Home() {
  const {userInfo} = useContext(AppState);
  const {setUserDetails,login} = useContext(AppState);
  async function fetchUser(){
    try{
      
      const token = Cookies.get('user');
      console.log("token",token);
        const {data} = await axios.post("http://localhost:8000/auth/getUser",{},{
            headers: {
                Authorization: `Bearer ${token}`,
              }
        })
        setUserDetails({userId:data._id,name:data.firstname,email:data.email,role: data.role});
    }
    catch(e){
        console.log(e);
    }
  }
  useEffect(()=>{
    fetchUser();
  },[])
  return (
    <div>
      <Navbar/>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',py:'10px'}}><h1>Welcome {userInfo.name}</h1></div>
      <MultiActionAreaCard/>
      <MultiActionAreaCard/>
    </div>
  )
}
