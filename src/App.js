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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      books: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3001/books')
      .then(user => {
        this.setState({
          email: user.email,
          books: user.books
        })
      })
  }

  render() {
    console.log('app', this.props);
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
                {
                    <Profile />
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
