import React from 'react';

//import Jumbotron from 'react-bootstrap/Jumbotron';
//import './BestBooks.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

class MyFavoriteBooks extends React.Component {

   render() {
    console.log('best book', this.props.books[0].name);
    return(
      <>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{this.props.books[0].name}</h3>
              <p>{this.props.books[0].description}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Second slide"
            />

            <Carousel.Caption>
            <h3>{this.props.books[0].name}</h3>
              <p>{this.props.books[0].description}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
            <h3>{this.props.books[0].name}</h3>
              <p>{this.props.books[0].description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
      )
  }
   
}

export default MyFavoriteBooks;
