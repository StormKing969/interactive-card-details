import React from "react";
import CardBack from "./img/bg-card-back.png";
import CardFront from "./img/bg-card-front.png";
import CardIcon from "./img/card-logo.svg";

import "./Card.scss";

const Card = ({creditCardInfo}) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="back-card">
          <img src={CardBack} alt="back side of the credit card" />
          <div className="card-cvc">
            {creditCardInfo.cvc === "" ? "123" : creditCardInfo.cvc}
          </div>
        </div>

        <div className="front-card">
          <img src={CardFront} alt="front side of the credit card" />
          <div className="card-logo">
            <img src={CardIcon} alt="credit card icon" />
          </div>

          <div className="card-content-info">
            <div className="card-number">
              {creditCardInfo.number === ""
                ? "1234 5678 9123 0000"
                : `${creditCardInfo.number.substring(
                    0,
                    4
                  )} ${creditCardInfo.number.substring(
                    4,
                    8
                  )} ${creditCardInfo.number.substring(
                    8,
                    12
                  )} ${creditCardInfo.number.substring(12, 16)}`}
            </div>

            <div className="card-details">
              {creditCardInfo.name === "" ? "Jane Appleseed" : creditCardInfo.name}

              <div className="card-expiration">
                {creditCardInfo.month === "" ? "MM" : creditCardInfo.month}/
                {creditCardInfo.year === "" ? "YY" : creditCardInfo.year}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="large-screen-bg">

        </div>
    </div>
  );
};

export default Card;
