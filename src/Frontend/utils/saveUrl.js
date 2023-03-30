import React, { useState } from 'react';
import { serverUrl } from "../../config.js";

const saveUrl = (email, URL) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, URL })
    };
  
    return fetch(`${serverUrl}/update_url/`, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };
  

  
  
export default saveUrl;
//NOw here you have to post the url into the user's database for the logged in user 
// if user is Authenticated then save url to user.profile 
// API should update(PUT) url in a new url colomn 
