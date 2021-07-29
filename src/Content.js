import React from 'react';
import axios from 'axios';
import { withAuth0} from '@auth0/auth0-react';

class Content extends React.Component {

  componentDidMount() {
    if (this.props.auth0.isAuthenticated){
      this.props.auth0.getIdTokenClaims()
      .then(res => {
        const jwt = res.__raw;

        const config = {
          method: 'get',
          headers: {'Authorization': `Bearer ${jwt}`},
          baseURL: 'https://can-of-books-back.herokuapp.com',
          url: '/test'
        }

        axios(config)
          .then(results => console.log('came from backend', results))
          .catch(err => console.error(err))
      
      })
    }
  }

  render() {
    return (
      <h1>Check console.log</h1>
    )
  }
}

export default withAuth0(Content);