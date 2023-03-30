import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ListGroup from 'react-bootstrap/ListGroup';
import Image from "../components/Image.jpg";
import "../components/test-card.css";
import ArticleDetails from '../components/ArticleDetails';
import Pagination from '../components/Pagination';
import { serverUrl } from "../../config.js";
import "../../Animations/airplane.css"

export class AllCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articles: [],
      openArticle: -1,
      selectArticle: -1,
      currentPage: 1
      
    };
  }

  componentDidMount() {
    fetch(`${serverUrl}/articles/?format=json`)
      .then((res) => res.json())
      .then(
        (result) => {
          // Sort the articles by date in descending order
          result.sort((a, b) => new Date(b.Date) - new Date(a.Date));
          this.setState({
            isLoaded: true,
            articles: result, 
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {

     

    const { error, isLoaded, articles, selectArticle, openArticle, currentPage, selectButton } = this.state;
    const articlesPerPage = 12; // number of articles to display per page

    const truncate = (input) =>
      input?.length > 300 ? `${input.substring(0, 254)}...` : input;

    const openFullArticle = (id) =>
      this.setState({
        openArticle: id
      });

    const selectedArticle = (id) =>
      this.setState({
        selectArticle: id
      });

  

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

    const handlePageChange = (pageNumber) => {
      this.setState({
        currentPage: pageNumber
      });
    };

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
       <div class="airplane">
        <img src="https://i.ibb.co/SPpRcJz/airplane.png" />
      <div class="smoke"></div>
      <div class="flame"></div>
      <div class="flame flame2"></div>
      </div>
        <div>
          <Container>
            <Row>
              <div className="card-column mt-3 test-cards">
                {currentArticles.map((article) => (
                  <Card
                    className="cards test-card"
                    style={{
                      width: "20rem",
                      minheight: "25px",
                      cursor: 'pointer'
                    }}
                    key={article.index}
                  >
                    { <Card.Img style ={{height: "200px"}} variant="top" src={article.Image ? article.Image : Image} className="img-fluid" alt="Responsive image" 
                    onClick={() =>{selectedArticle(article._id)}} /> }
                    <Card.Body>
                      <Card.Title 
                    onClick={() =>{selectedArticle(article._id)}} >
                      {article.Title}
                      </Card.Title>
                      <Card.Text
                        style={{
                          cursor: 'pointer'
                        }}
                      >
                        <p onClick={() => {openFullArticle(article._id)}} >
                          {openArticle !== article._id? truncate(article.Summary): article.Summary}
                        </p>
                      </Card.Text>
                    </Card.Body >
                    <ListGroup className="list-group-flush" 
                     >
                     {selectArticle !== article._id? '':
                       <ArticleDetails article={article} className="popupModal"/>
                     }
                      <ListGroup.Item onClick={() =>{selectedArticle(article._id)}} >Written by:  {article.Author || 'none'}</ListGroup.Item>
                      <ListGroup.Item onClick={() =>{selectedArticle(article._id)}}  >Read Time: {article.Read_Time} min</ListGroup.Item>
                      <ListGroup.Item onClick={() =>{selectedArticle(article._id)}} >Date: {article.Date ? article.Date : 'NA'}</ListGroup.Item>
                      <ListGroup.Item onClick={() =>{selectedArticle(article._id)}} >
                      <div style={{textAlign: 'center'}}>
                      <Button
                        variant="primary"
                        style={{
                          backgroundColor: "darkgreen",
                          border: "darkgreen 1px solid",
                        }}
                        onClick={() =>{selectedArticle(article._id)}} >Read More
                        {selectButton !== article._id? '': 
                          <ArticleDetails article={article} className="popupModal" />
                          
                        } 
                      </Button> 
                      </div>
                      </ListGroup.Item>
                    </ListGroup>
                    {/* <Card.Body className= "card-actions">
                    <Button
                        variant="primary"
                        style={{
                          backgroundColor: "darkgreen",
                          border: "darkgreen 1px solid",
                        }}
                        onClick={() =>{selectedArticle(article._id)} }>
                        {selectArticle !== article._id? 'Read More':
                          <ArticleDetails article={article} className="popupModal"/>
                        } 
                      </Button> 
                      <Card.Link to={article.URL} className= "card-link" href={article.URL} target= "_blank">Link to article</Card.Link>
                      </Card.Body> */}
                   </Card> 
                ))}
              </div>
            </Row>
          </Container>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={handlePageChange}
            totalArticles={articles.length}
            articlesPerPage={articlesPerPage}
          />
        </div>
        </div>
      );
    }
     
  }
}

export default AllCategories;
