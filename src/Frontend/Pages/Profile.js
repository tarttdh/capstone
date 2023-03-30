import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import NoteDetails from "../components/NoteDetails";
import { Nav } from 'react-bootstrap';
import { serverUrl } from '../../config';


const Profile = () => {


  const { user, isAuthenticated } = useAuth0();


  const [responseData, setResponseData] = useState(null);
  const [openNote, setOpenNote] = useState(null);


  const openFullNote = (id) => {
    setOpenNote(id);
  };


  const fetchData = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    var raw = JSON.stringify({
      "email": `${user.email}`
    });


    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };


    try {
      const response = await fetch(`${serverUrl}/user/`, requestOptions);
      const result = await response.json();
      setResponseData(result);
    } catch (error) {
      console.log('error', error);
      setResponseData(null);
    }
  }


  useEffect(() => {
    fetchData();
  }, []);


  if (!isAuthenticated) {
    return <div>Please log in to see your profile information.</div>;
  }


  return responseData ? (
    <div>
      <header className="text-center">
        <Nav className="mx-auto col-6 justify-content-end">
          <Nav.Link className="text-primary" href="/edit_profile">Edit Profile</Nav.Link>
        </Nav>
      </header>
      <div className="col-3 inset-shadow bg-secondary"></div>
      <main className="mx-auto col-6 text-center">
        <img className="round-img" style={{width: "130px", height: "130px", borderRadius: "125px"}} src={responseData.picture} alt="Profile Picture" />
        <h4 className="mb-0 mt-3 prof-title">{responseData.name}</h4>
        <p className="mb-3 mt-0">{responseData.email}</p>
        {responseData.savedNotes
          ? responseData.savedNotes.map(note => (
            <Card
              className="cards test-card"
              style={{
                width: "20rem",
                minheight: "25px"
              }}
              key={note.id}
            >
              <Card.Title>{note.articleTitle}</Card.Title>
              <Button
                variant="primary"
                style={{
                  backgroundColor: "darkgreen",
                  border: "darkgreen 1px solid",
                }}
                onClick={() => openFullNote(note.id)}
              >
                {openNote !== note.id ? "open Note" : <NoteDetails note={note} className="popupModal" />}
              </Button>
            </Card>
          ))
          : "No saved articles."}
      </main>
    </div>
  ) : (
    <div>Loading...</div>
  );
};


export default Profile;


