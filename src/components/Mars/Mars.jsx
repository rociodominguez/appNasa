import React, { useState, useEffect } from "react";
import "./Mars.css";

const URL = "https://api.nasa.gov/";
const KEY = "OY8QJ6dv2paITgnbu5tleIKinLpXqqKojNgbEPsZ";

const Mars = () => {
  const day = new Date(Date.now()).toISOString().slice(0, 10);
  const [marsData, setMarsData] = useState([]);
  const [date, setDate] = useState(day);

  useEffect(() => {
    const fetchMars = async () => {
      try {
        const responseMars = await fetch(
          `${URL}mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${KEY}`
        );
        const responseDataMars = await responseMars.json();

        setMarsData(responseDataMars.photos);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMars();
  }, [date]);

  const dateInput = (event) => setDate(event.target.value.toString());

  return (
    <div>
      <h1>Mars Rover Photos</h1>
      {marsData.length > 0 && <h2>{marsData[0].camera.name}</h2>}
      {marsData.length > 0 && (
        <img src={marsData[0].img_src} alt={marsData[0].camera.name} />
      )}
      {marsData.length > 0 && <p>{marsData[0].explanation}</p>}
    </div>
  );
};

export default Mars;
