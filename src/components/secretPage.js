import React from "react";
import { Redirect } from "react-router-dom";

const SecretPage = ({isLoggedIn}) => {
  if (isLoggedIn) {
    return (
      <div>
        The secret page
      </div>
    )
  }

  return <Redirect to="/"/>
};

export default SecretPage;
