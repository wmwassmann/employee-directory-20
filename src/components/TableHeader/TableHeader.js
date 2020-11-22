import React from "react";
import "./style.css";
function TableHead(props) {
  
  return (
        <thead>
            <tr>
                <th>Full name</th>
                <th>Gender</th>
                <th>City/State</th>
                <th>Email</th>
            </tr>
        </thead>
  );
}

export default TableHead;
