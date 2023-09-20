import React, { useEffect, useState } from "react";
import "./Nasa.css";

const URL = "https://api.nasa.gov/";
const KEY = "OY8QJ6dv2paITgnbu5tleIKinLpXqqKojNgbEPsZ";

const Nasa = () => {
  const day = new Date(Date.now()).toISOString().slice(0, 10);
  const [nasaData, setNasaData] = useState(null);
  const [date, setDate] = useState(day);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${URL}planetary/apod?date=${date}&api_key=${KEY}`
        );
        const responseData = await response.json();

        setNasaData({
          title: responseData.title,
          image: responseData.url,
          explanation: responseData.explanation,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [date]);

  const dateInput = (event) => setDate(event.target.value.toString());

  return (
    <>
      <div className="na-div">
        <h1>Astronomic picture of the day</h1>
        <h2>{nasaData && nasaData.title}</h2>
        <input type="date" value={date} max={day} onChange={dateInput} />
        {nasaData && <img src={nasaData.image} alt={nasaData.title} />}
        <p>{nasaData && nasaData.explanation}</p>
      </div>
    </>
  );
};

export default Nasa;
