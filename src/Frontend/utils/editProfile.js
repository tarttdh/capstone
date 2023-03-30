import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { serverUrl } from "../../config";

const UpdateUsername = () => {

  const { user, isAuthenticated } = useAuth0();
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdate = async (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: user.email, username })
    };

    try {
      const response = await fetch(`${serverUrl}/update_username/`, requestOptions);
      const data = await response.json();
      if (!data.error) {
        setMessage('Successfully updated username!');
      } else {
        setMessage('Error updating username.');
      }
      console.log(data);
    } catch (error) {
      console.error(error);
      setMessage('Error updating username.');
    }
  };

  return isAuthenticated ? (
    <div>
      <h2>Update Your Username</h2>
      <form onSubmit={handleUpdate}>
        <label>
          New Username:
          <textarea value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <button type="submit">Update</button>
        <Link to="/profile">Back to Profile</Link>
        <br />
        {message && <p>{message}</p>}
      </form>
    </div>
  ) : (
    <div>Please log in to update your username.</div>
  );
};

export default UpdateUsername;
