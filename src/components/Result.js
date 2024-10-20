import React, { useState } from "react";
import Forecast from "./Forecast";
function Result(props) {
  let data = props.weatherData;
  let isC = props.c;

  return (
    <>
      <section className="result">
        {/* {images.map((item, index) => {
          return <img src={`/images/${images[index]}`} alt="" />;
        })} */}
        <img src={`/images/${data.weather[0].icon}.svg`} alt="" />
        <section className="details">
          <p>Today</p>
          <h1>{data.name}</h1>
          <p>
            {isC
              ? `${data.main.temp} °C`
              : `${(data.main.temp * (9 / 5) + 32).toFixed(2)} °F`}
          </p>
          <p>{data.weather[0].main}</p>
        </section>
        <Forecast foreCastData={props.foreCastData} c={isC} />
      </section>
    </>
  );
}

export default Result;
