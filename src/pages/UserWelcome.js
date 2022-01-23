import React, { Fragment } from "react";
import "./UserWelcome.css"

function UserWelcome() {
  return (
    <Fragment>
      <h1 className="WelcomePage">Welcome Page</h1>
      <p>Select the service you want to receive </p>
      <p >
        If you click the "Web page" Service, please spicify Number of pages and quantity of languages.{" "}
      </p>
    </Fragment>
  );
}

export default UserWelcome;