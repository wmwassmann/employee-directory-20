import React from "react";
import "./style.css";

function Row(props) {

  return (


    props.employees.map((employee) => {
    return (
    <tr key={employee.login.uuid}>
        <td><img src={employee.picture.thumbnail} alt="employee"/> {employee.name.first} {employee.name.last}</td>
        <td>{employee.gender}</td>
        <td>{employee.location.city}, {employee.location.state}</td>
        <td>{employee.email}</td>
        
    </tr>)
    })
  )
}

export default Row;
