import React, { useCallback, useEffect, useState } from "react";
import CompleteIcon from "./img/icon-complete.svg";

import "./Form.scss";

const Form = ({ creditCardInfo, setCreditCardInfo }) => {
  const [successfulEntry, setSuccessfulEntry] = useState(false);
  const [basicCheck, setBasicCheck] = useState(false);
  const [expDateCheck, setExpDateCheck] = useState(false);

  const handleChange = useCallback(
    (event) => {
      event.preventDefault();
      const name = event.target.name;
      const value = event.target.value;

      if (name === "number" && value.length < 17) {
        if (/^[0-9]+$/gi.test(value.slice(-1)) || value.length === 0) {
          setCreditCardInfo((e) => ({ ...e, [name]: value }));
        }
      }

      if (name === "name" && value.length < 22) {
        if (/[a-z\s]/i.test(value.slice(-1)) || value.length === 0) {
          setCreditCardInfo((e) => ({ ...e, [name]: value }));
        }
      }

      if (name === "month" && value.length < 3 && value.length > 0) {
        setCreditCardInfo((e) => ({ ...e, [name]: value }));
      }

      if (name === "year" && value.length < 3) {
        setCreditCardInfo((e) => ({ ...e, [name]: value }));
      }

      if (name === "cvc" && value.length < 4) {
        setCreditCardInfo((e) => ({ ...e, [name]: value }));
      }
    },
    [setCreditCardInfo]
  );

  let currentYear = new Date().getFullYear();
  currentYear = currentYear.toString().slice(-2) - 5;

  const expirationInputCheck = () => {
    if (
      creditCardInfo.month < 13 &&
      creditCardInfo.month !== 0 &&
      creditCardInfo.year >= currentYear
    ) {
      setExpDateCheck(true);
    } else {
      setExpDateCheck(false);
    }
  };

  const basicInputCheck = () => {
    if (
      creditCardInfo.number.length === 16 &&
      creditCardInfo.name.length !== 0 &&
      creditCardInfo.month.length === 2 &&
      creditCardInfo.year.length === 2 &&
      creditCardInfo.cvc.length === 3
    ) {
      setBasicCheck(true);
    } else {
      setBasicCheck(false);
    }
  };

  const entryCheck = (e) => {
    e.preventDefault();
    expirationInputCheck();
    basicInputCheck();
    if (expDateCheck && basicCheck) {
      setSuccessfulEntry(true);
    }
  };

  return (
    <div className="form-container">
      <form className={successfulEntry ? "disable-form" : "interactive-form"}>
        <div className="name-entry entry-box">
          <label>Cardholder Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="e.g. Jane Appleseed"
            value={creditCardInfo.name}
            onChange={handleChange}
          />
        </div>

        <div className="number-entry entry-box">
          <label>Card Number</label>
          <input
            type="number"
            name="number"
            required
            placeholder="e.g. 1234 5678 9123 0000"
            value={creditCardInfo.number}
            onChange={handleChange}
          />
        </div>

        <div className="other-detail-entry entry-box">
          <div className="expiration-entry">
            <label>Exp. Date (MM/YY)</label>
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

          <div className="cvc-entry">
            <label>Cvc</label>
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
        <button className="entry-button" onClick={entryCheck}>
          Confirm
        </button>
      </form>

      <div className={successfulEntry ? "thanks-form" : "disable-form"}>
        <div className="complete-icon">
          <img src={CompleteIcon} alt="complete icon" />
        </div>
        <div className="thanks-content">
          <h1>Thanks You!</h1>
          <p>We've added your card details</p>
        </div>
        <button className="continue-button">Continue</button>
      </div>
    </div>
  );
};

export default Form;
