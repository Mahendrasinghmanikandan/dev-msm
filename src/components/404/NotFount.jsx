/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const NotFount = () => {
  useEffect(() => {
    document.title = "404";
  });
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src="https://cdn.dribbble.com/users/42048/screenshots/8350927/robotintro_dribble.gif"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Page Not Found</h1>
            <p className="py-5 text-2xl">
              The specified file was not found on this website. Please check the
              URL for mistakes and try again.
            </p>
            <Link to="/">
              <button className="btn btn-primary">Back to Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFount;
