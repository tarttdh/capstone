import React, { useState } from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';

const Pagination = (props) => {
  // destructuring the currentPage and setCurrentPage from the props
  const { currentPage, setCurrentPage } = props;

  // logic for changing the current page
  const handleClick = (pageNumber) => setCurrentPage(pageNumber);

  // logic for displaying the page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.totalArticles / props.articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  const [searchPage, setSearchPage] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    const searchResult = parseInt(searchPage);
    if (searchResult >= 1 && searchResult <= pageNumbers.length) {
      handleClick(searchResult);
    }
    setSearchPage("");
  }

  // const renderPageNumbers = pageNumbers.map((number) => {
  //   return (
  //     <Button
  //       variant={number === currentPage ? 'primary' : 'secondary'}
  //       key={number}
  //       id={number}
  //       onClick={() => handleClick(number)}
  //     >
  //       {number}
  //     </Button>
  //   );
  // });

  return (
    <Card className="text-center">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <Button
            variant="primary"
            disabled={currentPage === 1}
            onClick={() => handleClick(currentPage - 1)}
          >
            Previous
          </Button>
          <div className="d-flex flex-column align-items-center">
            <h5>{`Page ${currentPage} of ${pageNumbers.length}`}</h5>
            <Form className="d-flex" onSubmit={handleSearch}>
              <Form.Group controlId="formSearchPage" className="mb-0">
                <Form.Control
                  type="number"
                  min="1"
                  max={pageNumbers.length}
                  value={searchPage}
                  onChange={(event) => setSearchPage(event.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="ml-2">
                Go
              </Button>
            </Form>
          </div>
          <Button
            variant="primary"
            disabled={currentPage === pageNumbers.length}
            onClick={() => handleClick(currentPage + 1)}
          >
            Next
          </Button>
        </div>
        <div className="my-3">
          {/* {renderPageNumbers} */}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Pagination;
