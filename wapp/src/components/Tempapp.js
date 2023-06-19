import React, { useEffect, useState } from 'react';
import "./style.css";
import img from "./weatherlogo.jpg"
const Tempapp=()=>{

    const [city, setCity]=useState(null);
    const [search, setSearch ]=useState("Pune");

    useEffect(()=>{
        const fetchApi= async () =>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8fcff581b0f3b6471f19cad1fb5ff055`
            const response=await fetch(url) 

            const resJson= await response.json();
            setCity(resJson.name)
        }

            fetchApi();
}  , [search] )  




    return(
        <>
        <div className='body'>
            <div className='box'>
                    <div className='headcon'>
                        <h2 className='head'>Weather Report </h2>
                    </div>
                <div className='inputData'>
                    <input  type="search" value={search} className='inputField' onChange={(event)=>{setSearch(event.target.value)}}/>

                </div>
         
{ !city ?  (
            <p className='errorMsg'>No Such City Found</p>

       ) :
       (
        <div>
        <div className='info'>
        <h2 className='location'>
        <img src={img} alt='No image'  width="50px" height="50px"/>{search}
        </h2>
        <h1 className='temp'>
            {city.temp}
        </h1>
            <h3 className='tempmin_max'>Min: {city.temp_min} °Cel |  Max: {city.temp_max}  ° Cel

            </h3>
    </div>
  

    </div>

       )
}
</div>
</div>
    </>  
    )
}

export default  Tempapp;

