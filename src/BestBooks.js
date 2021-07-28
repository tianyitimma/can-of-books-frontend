import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import Carousel from 'react-bootstrap/Carousel';

class MyFavoriteBooks extends React.Component {

   render() {
    return(
      <>
        <Carousel>
        <Carousel.Item>
          
          <Carousel.Caption>
            <h3>{this.props.books[0].name}</h3>
            <p>{this.props.books[0].description}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
         
          <Carousel.Caption>
          <h3>{this.props.books[1].name}</h3>
            <p>{this.props.books[1].description}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          
          <Carousel.Caption>
            <h3>{this.props.books[2].name}</h3>
            <p>{this.props.books[2].description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </>
      )
  }
   
}

export default MyFavoriteBooks;
