import React, { useState, useEffect } from 'react';
import './UserTable.css';

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the provided URL
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => {
        // Extract and filter the relevant columns
        const filteredData = data.users.map((user) => ({
          Sno: user.id,
          ProfilePic: user.image,
          Firstname: user.firstName,
          Lastname: user.lastName,
          Gender: user.gender,
          Email: user.email,
          Username: user.username,
          Domain: user.domain,
          IP: user.ip,
          University: user.university,
        }));
        setUsers(filteredData);
      });
  }, []);

  return (
    <div className='body'>
        <div >
            <h2>Dummy Data</h2>
            <div className='table'>
                <table >
                    <thead >
                    <tr>
                        <th>Sno</th>
                        <th>ProfilePic</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Domain</th>
                        <th>IP</th>
                        <th>University</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user.Sno}>
                        <td>{user.Sno}</td>
                        <td className="profile-pic-cell" ><img src={user.ProfilePic} alt={`Profile of ${user.Firstname}`} /></td>
                        <td>{user.Firstname}</td>
                        <td>{user.Lastname}</td>
                        <td>{user.Gender}</td>
                        <td>{user.Email}</td>
                        <td>{user.Username}</td>
                        <td>{user.Domain}</td>
                        <td>{user.IP}</td>
                        <td>{user.University}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}

export default UserTable;