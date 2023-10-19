import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Axios() {
    let [apiData,setApiData]=useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then(response => {
        setApiData(response.data)
    console.log("apiData",apiData); 
  })
//   .catch(error => {
//     console.error('Error:', error);
//   });
},[])
  return (
    <>
    <h1 style={{textAlign:"center"}}>Axios</h1>
    <div className='dataTable'>
        
        {apiData.map(function(value,index){
            return(
                <div className='table' key={index}>
                    <p>userId:{value.userId}</p>
                    <p>id: {value.id}</p>
                    <p>title:{value.title}</p>
                    <p>completed:{value.completed}</p>
                </div>
            )
        })}

    </div>
    </>
  )
}

export default Axios