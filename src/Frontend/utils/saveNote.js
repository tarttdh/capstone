import React, { useState } from 'react';
import { serverUrl } from "../../config.js";

const saveNote = (email, articleTitle, URL ) => {
    console.log(email)
    console.log(articleTitle)
    console.log(URL)
    
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, articleTitle, URL })
    };
  
    return fetch(`${serverUrl}/save_note/`, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };
      

  
  
export default saveNote;
//NOw here you have to post the url into the user's database for the logged in user 
// if user is Authenticated then save url to user.profile 
// API should update(PUT) url in a new url colomn 
