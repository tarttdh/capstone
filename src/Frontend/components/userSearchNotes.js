import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Note = ({ note }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 


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
            {note.note}
        </Modal.Body>

        <Modal.Footer>
          <a href={note.URL} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">Link to Article</Button>
          </a>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Note;
