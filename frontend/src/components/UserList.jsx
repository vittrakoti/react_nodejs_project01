import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]); // State to store users
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  // Fetch users from the backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data); // Set the fetched users
        setLoading(false); // Stop loading
      } catch (err) {
        setError(err.message); // Set error message
        setLoading(false); // Stop loading
      }
    };

    fetchUsers();
  }, []);

  // Display loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display error message
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Display the list of users
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.first_name} {user.last_name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;