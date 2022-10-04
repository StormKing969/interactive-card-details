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

  const handleChange = useCallback(
    (event) => {
      event.preventDefault();
      const name = event.target.name;
      const value = event.target.value;
      setCreditCardInfo((e) => ({ ...e, [name]: value }));
    },
    [setCreditCardInfo]
  );

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
                : creditCardInfo.number}
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
              maxLength="24"
              value={creditCardInfo.name}
              placeholder="Jane Doe"
              onChange={handleChange}
            />
          </div>

          <div className="form_card_entry_number">
            <label>CARD NUMBER</label>
            <input
              type="number"
              name="number"
              required
              value={
                !(creditCardInfo.number.length > 16)
                  ? creditCardInfo.number
                  : creditCardInfo.number.substring(0, 15)
              }
              placeholder="0000 0000 0000 0000"
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
                  value={
                    !(creditCardInfo.month.length > 2)
                      ? creditCardInfo.month
                      : creditCardInfo.month.substring(0, 2)
                  }
                  placeholder="MM"
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="year"
                  required
                  value={
                    !(creditCardInfo.year.length > 2)
                      ? creditCardInfo.year
                      : creditCardInfo.year.substring(0, 2)
                  }
                  placeholder="YY"
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
                value={
                  !(creditCardInfo.cvc.length > 3)
                    ? creditCardInfo.cvc
                    : creditCardInfo.cvc.substring(0, 3)
                }
                placeholder="e.g. 123"
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
