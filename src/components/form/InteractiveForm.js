import React, { useCallback, useState } from "react";
import CreditCardLogo from "./img/card-logo.svg";

import "./InteractiveForm.scss";

const InteractiveForm = () => {
  const [creditCardInfo, setCreditCardInfo] = useState({
    number: "",
    name: "",
    month: "",
    year: "",
    cvc: "",
  });

  const handleChange = useCallback((event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;

    if (name === "number" && value.length < 17) {
        if ((/^[0-9]+$/gi).test(value.slice(-1)) || value.length === 0) {
            setCreditCardInfo((e) => ({ ...e, [name]: value }));
        }
    }

    if (name === "name" && value.length < 22) {
        if ((/[a-z\s]/i).test(value.slice(-1)) || value.length === 0) {
            setCreditCardInfo((e) => ({ ...e, [name]: value }));
        }
    }

    if (name === "month" && value.length < 3) {
      setCreditCardInfo((e) => ({ ...e, [name]: value }));
    }

    if (name === "year" && value.length < 3) {
      setCreditCardInfo((e) => ({ ...e, [name]: value }));
    }

    if (name === "cvc" && value.length < 4) {
      setCreditCardInfo((e) => ({ ...e, [name]: value }));
    }
  }, []);

  console.log(creditCardInfo);

  return (
    <div className="interactive_container">
      <div className="interactive_card">
        <div className="credit_card_front">
          <img src={CreditCardLogo} alt="credit card logo" />

          <div className="credit_card_content">
            <div className="credit_card_number">
              {creditCardInfo.number === ""
                ? "0000 0000 0000 0000"
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
            <div className="credit_card_details">
              {creditCardInfo.name === "" ? "Jane Doe" : creditCardInfo.name}

              <div className="credit_card_expiration">
                {creditCardInfo.month === "" ? "00" : creditCardInfo.month}/
                {creditCardInfo.year === "" ? "00" : creditCardInfo.year}
              </div>
            </div>
          </div>
        </div>

        <div className="credit_card_back">
          <div className="credit_card_cvc">
            {creditCardInfo.cvc === "" ? "000" : creditCardInfo.cvc}
          </div>
        </div>
      </div>

      <div className="interactive_form">
        <form>
          <div className="form_card_entry_name">
            <label>CARDHOLDER NAME</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Jane Doe"
              value={creditCardInfo.name}
              onChange={handleChange}
            />
          </div>

          <div className="form_card_entry_number">
            <label>CARD NUMBER</label>
            <input
              type="number"
              name="number"
              required
              placeholder="0000 0000 0000 0000"
              value={creditCardInfo.number}
              onChange={handleChange}
            />
          </div>

          <div className="form_card_entry_details">
            <div className="form_card_entry_details_year_month">
              <label>EXP. DATE (MM/YY)</label>
              <div>
                <input
                  type="number"
                  name="month"
                  required
                  placeholder="MM"
                  value={creditCardInfo.month}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="year"
                  required
                  placeholder="YY"
                  value={creditCardInfo.year}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form_card_entry_details_cvc">
              <label>CVC</label>
              <input
                type="number"
                name="cvc"
                required
                placeholder="e.g. 123"
                value={creditCardInfo.cvc}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit">Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default InteractiveForm;
