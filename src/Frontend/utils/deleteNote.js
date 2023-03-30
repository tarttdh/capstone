import { serverUrl } from "../../config.js";

const deleteNote = (email, articleTitle, URL ) => {
    console.log(email)
    console.log(articleTitle)
    console.log(URL)
    
    const requestOptions = {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, articleTitle, URL })
    };
  
    return fetch(`${serverUrl}/delete_note/`, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };
      

  
  
export default deleteNote;
