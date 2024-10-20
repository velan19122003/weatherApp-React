import React from "react";
import "../assets/css/style.css";

function Forecast(props) {
  let isC = props.c;
  return (
    <>
      <ul className="forecast">
        {props.foreCastData.map((item, index) => {
          return (
            <li className="resultsOfForeCast" key={index}>
              <p className="day">{item.day}</p>
              <img src={require(`../assets/images/${item.image}.svg`)} alt="" />
              <p className="temp">
                {isC
                  ? `${item.temp} °C`
                  : `${(item.temp * (9 / 5) + 32).toFixed(2)} °F`}
              </p>
              <p className="type">{item.type}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Forecast;
