import React, { useState } from 'react'
import "./Searchbox.css";
import { Image } from './Image';
export const Searchpage = (props) => {
    const [data,setdata]=useState("")
    function handleinput(){
        const data=document.getElementById('input');
        console.log(data.value);
        setdata(data.value)
    }
  return (
    <>
    <div className='background' >
        {/* <img src={Hanuman} alt=""  style={{height:"60vh" ,width:"100%"}}/> */}
        <input type="search" placeholder='search' id='input'/>
        <button onClick={handleinput}> Click me</button>
    </div>
    <Image search={data}></Image>
</>
  )
}
