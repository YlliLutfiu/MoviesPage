import React from "react";

const ErrorPage = () => {
  return (
    <div className="error">
      <p>Error 404: Page not found!</p>
      {alert("Error 404")}
      {console.log("This page doesn't exist!")}
    </div>
  );
};

export default ErrorPage;
