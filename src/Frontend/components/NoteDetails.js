import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import saveNoteCom from "../utils/saveNoteCom";
import deleteNote from "../utils/deleteNote";
import { useAuth0 } from "@auth0/auth0-react";

const NoteDetails = ({ note }) => {
  const [show, setShow] = useState(false);
  const [updateNote, setUpdateNote] = useState(false);
  const [noteText, setNoteText] = useState(note.note);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const { user, isAuthenticated } = useAuth0();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleUpdateNoteClick = () => {
    setUpdateNote(true);
    setShowDeleteButton(true);
  };
  const handleNoteChange = (event) => setNoteText(event.target.value);
  const handleNoteUpdate = () => {
    console.log(user.email)
    console.log(noteText)
    console.log(note.articleTitle)
    console.log(note.URL)
    saveNoteCom(user.email, noteText, note.articleTitle, note.URL);
    setUpdateNote(false);
    setShowDeleteButton(false);
  };
  const handleDeleteNoteClick = () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      deleteNote(user.email, note.articleTitle, note.URL);
      alert("Note deleted.");
      handleClose();
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open Note
      </Button>

      <Modal
        size={"md"}
        style={{ width: "100%" }}
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton display="flex">
          <Modal.Title
            style={{ textAlign: "center", marginRight: "auto" }}
          >
            {note.articleTitle}
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
          <p></p>
          {updateNote ? (
            <textarea
              id="note"
              value={noteText}
              onChange={handleNoteChange}
            />
          ) : (
            note.note
          )}
        </Modal.Body>

        <Modal.Footer>
          <a href={note.URL} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">Link to Article</Button>
          </a>
          {isAuthenticated && !updateNote && (
            <Button variant="primary" onClick={handleUpdateNoteClick}>
              Update Note
            </Button>
          )}
          {showDeleteButton && (
            <Button variant="danger" onClick={handleDeleteNoteClick}>
              Delete
            </Button>
          )}
          {updateNote ? (
            <>
              <Button variant="primary" onClick={handleNoteUpdate}>
                Update Note
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  setUpdateNote(false);
                  setShowDeleteButton(false);
                }}
              >
                Cancel
              </Button>
            </>
          ) : (
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NoteDetails;
