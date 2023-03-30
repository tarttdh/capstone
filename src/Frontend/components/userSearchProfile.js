import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import NoteDetails from "./NoteDetails";
import searchUser from '../utils/searchUser';
import Note from './userSearchNotes';

const SearchProfile = (props) => {


  console.log("searchProfileProps ", props)

  const [responseData, setResponseData] = useState()
    
  let _userData;
  
  searchUser(props.searchTerm).then((result) => {
    console.log("Results", result)
    _userData = result;
    setResponseData(result);
  })

  const [openNote, setOpenNote] = useState(null);

  const openFullNote = (id) => {
    setOpenNote(id);
  };

  

  return (
    <div>
      <main>

      {responseData &&
       <img src={responseData.picture} />}

        {responseData &&
       <p>Email: {responseData.email}</p>}
      
        {responseData && responseData.savedNotes ? (
          responseData.savedNotes.map((note) => (
            <Card
              className="cards test-card"
              style={{
                width: "20rem",
                minheight: "25px",

              }}
              onClick={() => openFullNote(note.id)}
              >
              <Card.Title>{note.articleTitle}</Card.Title>
              <Card.Footer 
              key={note.id}
              >
              {openNote !== note.id ? (
                  ""
                ) : (
                  <Note note={note} className="popupModal" />
                )}
              </Card.Footer>
              
            </Card>
        
          ))
        ) : (
          "No saved notes"
        )}
        
      
      </main>
    </div>
  );
};

export default SearchProfile;
