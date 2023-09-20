import React, { useState, useEffect } from "react";
import "./Mars.css";

const URL = "https://api.nasa.gov/";
const KEY = "OY8QJ6dv2paITgnbu5tleIKinLpXqqKojNgbEPsZ";

const Mars = () => {
  const day = new Date(Date.now()).toISOString().slice(0, 10);
  const [marsData, setMarsData] = useState(null);
  const [date, setDate] = useState(day);

  useEffect(() => {
    const fetchMars = async () => {
      try {
        const responseMars = await fetch(
          `${URL}mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${KEY}`
        );
        const responseDataMars = await responseMars.json();

        setMarsData({
          date: responseDataMars.photos[1].earth_date,
          img: responseDataMars.photos[1].img_src,
          photos: responseDataMars.photos[1].rover.total_photos,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchMars();
  }, [date]);

  const dateInput = (event) => setDate(event.target.value.toString());

  return (
    <div className="na-mars">
      <h1>Mars Rovers</h1>
      <h2>{marsData && marsData.date}</h2>
      <p>Total photos: {marsData && marsData.photos}</p>
      <input type="date" value={date} max={day} onChange={dateInput} />
      {marsData && <img src={marsData.img} alt={marsData.title} />}
    </div>
  );
};

export default Mars;
