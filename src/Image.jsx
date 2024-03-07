import React from 'react'
import { useState,useEffect } from 'react';
export const Image = (props) => {
    const [data,setdata]=useState([]);
    const[newstate,setstate]=useState("sky")
    // setstate(props.search)
    const key="30926298-99afd87bac22b263ca16b6dd4";
    useEffect(() => {
        setstate(props.search);
      }, [props.search]);
  useEffect(()=>{
    async function getdata() {
      const req=await fetch(`https://pixabay.com/api/?key=${key}&q=${newstate}&image_type=photo`)
      const res= await req.json();
      console.log(res.hits );
      setdata(res.hits);
    }
    getdata();
  },[newstate])


  return (
    <div>
       
           {
             data.map((item) => {
               return <>
       
               <img  src={item.previewURL} alt={item.tags } style={{margin:"10px",height:"100%"}} 
              />
               </>
             })
     
        }
      </div>
  )
}
