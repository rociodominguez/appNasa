import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="text-container">
        <h1>WELCOME</h1>
        <p>
        The NASA API, or Application Programming Interface, is a set of rules and protocols that allows software applications to communicate and interact with NASA's vast database of space-related information and resources. It provides developers with access to a wide range of data, including images, videos, mission details, astronomical observations, and more, collected from various NASA missions and research endeavors. This API empowers developers to incorporate real-time and historical space-related information into their own applications, websites, or projects, enabling them to create educational tools, visualizations, and applications that utilize NASA's wealth of knowledge about our universe.
        </p>
      </div>
      <div className="na-home">
        <h2>WHERE DO YOU WANT TO GO?</h2>
        <button>
          <Link to="/nasa">NASA</Link>
        </button>
        <button>
          <Link to="/mars">MARS</Link>
        </button>
      </div>
      <footer>
        <p>Created with ❤ by Rocío Domínguez</p>
      </footer>
    </>
  );
};

export default Home;
