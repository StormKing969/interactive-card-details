import React from "react";
import CardBack from "./img/bg-card-back.png";
import CardFront from "./img/bg-card-front.png";
import CardLogo from "./img/card-logo.svg";

import "./Card.scss";

const Card = ({ creditCardInfo }) => {
    return (
        <section className="left_section">
            <div className="cards">
                <div className="front_card">
                    <img src={CardFront} alt="credit card front" />

                    <div className="card_container">
                        <img
                            className="credit_card_logo"
                            src={CardLogo}
                            alt="credit card front icon"
                        />

                        <h1 className="credit_card_number">
                            {creditCardInfo.number.length > 0
                                ? creditCardInfo.number
                                : "1234 5678 9123 0000"}
                        </h1>

                        <div className="credit_card_info">
                            <span className="credit_card_name">
                                {creditCardInfo.name.length > 0
                                    ? creditCardInfo.name
                                    : "Jane Appleseed"}
                            </span>

                            <span className="credit_card_date">
                                <span className="credit_card_month">
                                    {creditCardInfo.month.length > 0
                                        ? creditCardInfo.month
                                        : "00"}
                                </span>
                                <span> / </span>
                                <span className="credit_card_year">
                                    {creditCardInfo.year.length > 0
                                        ? creditCardInfo.year
                                        : "00"}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="back_card">
                    <img src={CardBack} alt="credit card back" />

                    <span className="credit_card_cvc">
                        {creditCardInfo.cvc.length > 0
                            ? creditCardInfo.cvc
                            : "123"}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Card;
