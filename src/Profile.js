import React from "react";
import { withAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user } = this.props.auth0;

  return (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
  )
};

export default withAuth0(Profile);