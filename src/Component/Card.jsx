import React from "react";
import "./style.css";
function Card({ type, color, index, logoUrl, description }) {
  return (
    <>
      {type === "down" ? (
        <div style={{ margin: 5 }}>
          <div className="box1">
            <div className="downIndexContainer">
              <p className="indexText" style={{ color: color }}>
                {index}
              </p>
            </div>
            <div className="colorDiv1" style={{ backgroundColor: color }}></div>
            <img className="downcardLogo" src={logoUrl} />
            <p className="downcardText"> {description}</p>
          </div>
          <div className="shadowBox1" />
        </div>
      ) : (
        <div style={{ margin: 5 }}>
          <div className="box2">
            <div className="upIndexContainer">
              <p className="indexText" style={{ color: color }}>
                {index}
              </p>
            </div>
            <img className="upcardLogo" src={logoUrl} />
            <p className="upcardText">{description}</p>
            <div className="colorDiv2" style={{ backgroundColor: color }}></div>
          </div>
          <div className="shadowBox2" />
        </div>
      )}
    </>
  );
}

export default Card;
