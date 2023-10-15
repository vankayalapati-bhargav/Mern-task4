import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import 'D:/MERN INTERNSHIP/rtask4/src/UserTable.css'; 


const UserTable = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then(response => {
        const users = response.data.users;
        setUserData(users);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div style={{backgroundColor:'black',color:'white',padding:'10px'}}>
      <h1>Dummy Data</h1>
      <table className="custom-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>FisrtName</th>
            <th>LastName</th>
            <th>Age</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>Univeristy</th>
            
          </tr>
        </thead>
        <tbody>
          {userData.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;