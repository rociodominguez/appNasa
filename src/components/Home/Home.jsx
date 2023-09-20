import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="text-container">
        <h1>WELCOME</h1>
      </div>
      <p>
        The NASA API provides developers with access to a wealth of
        space-related data, images, and scientific knowledge. It offers detailed
        information on celestial bodies, space missions, and astronomical
        events. Additionally, it boasts a stunning collection of images captured
        by space missions and provides access to valuable scientific data,
        making it an essential resource for space enthusiasts, scientists,
        educators, and students alike.
      </p>
      <div className="na-home">
        <h2>WHERE DO YOU WANT TO GO?</h2>
        <button>
          <Link to="/nasa">Go to Nasa</Link>
        </button>
        <button>
          <Link to="/mars">Go to Mars</Link>
        </button>
      </div>
    </>
  );
};

export default Home;
