import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton.js';
import Profile from './Profile.js';
import BestBooks from './BestBooks.js';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './Content';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      books: []
    }
  }

  componentDidMount(){
    axios.get('https://can-of-books-back.herokuapp.com/books')
      .then(user => {
        this.setState({
          email: user.data[0].email,
          books: user.data[0].books
        })
      })
  }

  render() {
    console.log('books', this.state.books);
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
              <LoginButton />
              {this.props.auth0.isAuthenticated && this.state.books.length &&
                <BestBooks books={this.state.books} />
              }
              </Route>
              <Route exact path="/profile">
              {this.props.auth0.isAuthenticated &&
                <>
                  <Profile />
                  <Content />
                </>
              }
              </Route>
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
