import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";
import saveNoteCom from "../utils/saveNoteCom";
import saveNote from "../utils/saveNote";


const leftButtonStyles = {
  float: "left",
  padding: "5px 10px",
  fontSize: "12px",
  marginRight: "10px",
  backgroundColor: "rgb(134, 1, 1)", /* set background color to custom primary color */
  borderColor: "rgb(134, 1, 1)", /* set border color to custom primary color */
  
};

const rightButtonStyles = {
  float: "right",
  padding: "5px 10px",
  fontSize: "12px",
  marginRight: "10px",
  backgroundColor: "rgb(134, 1, 1)", /* set background color to custom primary color */
  borderColor: "rgb(134, 1, 1)", /* set border color to custom primary color */
  
};

const modalArticleStyle_notes = {
  width: "66%",
};

const modalArticleStyle = {
  width: "100%",
};

const modalCommentsStyle_notes = {
  width: "30%",
  height: "100%",
  visibility: "visible",
  position: "fixed",
  right: 0,
  left: "65%",
  "@media (max-width: 768px)": {
    width: "100%",
    left: 0,
    right: 0,
    bottom: 0,
    height: "50vh",
    overflowY: "scroll",
    maxWidth: "100%",
  },
};

const modalCommentsStyle = {
  width: "30%",
  height: "100%",
  visibility: "hidden",
  position: "fixed",
  right: 0,
  left: "65%",
  "@media (max-width: 768px)": {
    width: "100%",
    left: 0,
    right: 0,
    bottom: 0,
    height: "50vh",
    overflowY: "scroll",
    maxWidth: "100%",
  },
};

const ArticleDetails = ({ article }) => {
  const [show, setShow] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  const [showNotes, setShowNotes] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    setShow(true); // set show to true when component is mounted to show modal
  }, []);

  return (
    <>
      

      <Modal 
        size={showNotes === true ? "xl" : "lg"}
        style={{ width: "100%" }}
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton display="flex">
          <Button
            style={rightButtonStyles}
            onClick={() => setShowNotes(!showNotes)}
          >
            {showNotes === true ? (
              <span>Hide Comments</span>
            ) : (
              <span>Create Comments</span>
            )}
          </Button>
          <Modal.Title style={{ textAlign: "center", marginRight: "auto" }}>
            {article.Title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            color: "black",
            fontWeight: "bold",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={
              showNotes === true ? modalArticleStyle_notes : modalArticleStyle
            }
          >
            <img
              src={article.Image}
              style={{
                textAlign: "center",
                maxWidth: "100%",
                maxHeight: "500px",
              }}
              alt={article.Title}
            />
            <p></p>
            {article.Text.split("\n").map((paragraph, idx) => (
              <p key={idx}>{paragraph.replace(/\s\s+/g, " ")}</p>
            ))}
          </div>
          <div
            style={
              showNotes === true
                ? modalCommentsStyle_notes
                : modalCommentsStyle
            }
          >
            <h5>Comments</h5>
            <textarea
              placeholder="Enter comments"
              name="Comment"
              rows="4"
              cols="40"
              id="comment"
              style={{
              "@media (max-width: 768px)": {
                width: "100%",
                left: 0,
                right: 0,
                bottom: 0,
                height: "50vh",
                overflowY: "scroll",
                maxWidth: "100%",
              },}}
            ></textarea>
            <Button
              onClick={() => {
                if (isAuthenticated) {
                  if (document.querySelector("#comment").value !== "") {
                    saveNoteCom(
                      user.email,
                      document.querySelector("#comment").value,
                      article.Title,
                      article.URL
                    );
                    alert("article saved!");
                  } else {
                    alert("no context in comments area");
                  }
                } else
                     {
                alert('Please log in to save article + comments to profile.'); // Display a message prompting the user to log in
              }
            }}
            >
              
              Save article + comments
            </Button>
          </div>
        </Modal.Body>

        <Modal.Footer>
        <Button
            style={leftButtonStyles}
            onClick={() => {
              // console.log(user.email)
              // console.log(article.Title)
              // console.log(article.URL)
              if (isAuthenticated) { // Check if the user is authenticated
                saveNote(user.email, article.Title, article.URL); // Save the note to the user's profile
                alert('article saved!'); // Display a success message
              } else {
                alert('Please log in to save article to profile.'); // Display a message prompting the user to log in
              }
              
              
            }}
          >
            Save Article
          </Button>
          <Button
            style={leftButtonStyles}
            onClick={()=> {

              ''

            }}
          >Recommended </Button>
        
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ArticleDetails;
