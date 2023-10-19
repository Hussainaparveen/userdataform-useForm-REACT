import React from 'react'
// import { useState } from 'react';

function DataTable() {
    const dataTable=JSON.parse(localStorage.getItem("userdata"));
  return (
    <div className='dataTable'> 
      {/* <table>
              <tr>
                <th>username</th>
                <th>email</th>
                <th>designation</th>
              </tr>
      </table> */}
        {dataTable.map(function(value,index){
          
        return(
          <div className='table' key={index}>
            <h2>USER DETAILS - {index+1}</h2>
                <p>USERNAME : {value.username}</p>
                <p>EMAIL : {value.email}</p>
                <p>DESIGNATION : {value.designation}</p>
          </div>
        )
      })}
      </div>
  )
}

export default DataTable