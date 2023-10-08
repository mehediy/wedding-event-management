import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="text-xl">Page not found</h1>
        <Link to={"/"}>
          <button className="btn btn-primary">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
