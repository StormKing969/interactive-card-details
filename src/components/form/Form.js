import React, { useCallback, useState } from "react";
import CompleteIcon from "./img/icon-complete.svg";

import "./Form.scss";

const Form = ({ creditCardInfo, setCreditCardInfo }) => {
    const [checkEntry, setCheckEntry] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [numberError, setNumberError] = useState(false)
    const [monthError, setMonthError] = useState(false)
    const [yearError, setYearError] = useState(false)
    const [cvcError, setCvcError] = useState(false)

    const handleChange = useCallback(
        (e) => {
            const name = e.target.name;
            const value = e.target.value;

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

            if (name === "month" && value.length < 3) {
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

    const checkName = () => {
        if (creditCardInfo.name.length < 3) {
            setNameError(true)
        } else {
            setNameError(false)
            return true;
        }
        return false;
    }

    const checkNumber = () => {
        if (creditCardInfo.number.length !== 16) {
            setNumberError(true)
        } else {
            setNumberError(false)
            return true;
        }
        return false;
    }

    const checkMonth = () => {
        if (!(creditCardInfo.month > 0 && creditCardInfo.month < 13)) {
            setMonthError(true)
        } else {
            setMonthError(false)
            return true;
        }
        return false;
    }

    const checkYear = () => {
        let currentYear = new Date().getFullYear();
        currentYear = currentYear.toString().slice(-2) - 5;

        if (!(creditCardInfo.year >= currentYear)) {
            setYearError(true)
        } else {
            setYearError(false)
            return true;
        }
        return false;
    }

    const checkCvc = () => {
        if (creditCardInfo.cvc.length !== 3) {
            setCvcError(true)
        } else {
            setCvcError(false)
            return true;
        }
        return false;
    }

    const entryValidation = (e) => {
        e.preventDefault()
        checkName()
        checkNumber()
        checkMonth()
        checkYear()
        checkCvc()

        if (checkName() && checkNumber() && checkMonth() && checkYear() && checkCvc()) {
            setCheckEntry(true);
            return
        } 
        setCheckEntry(false);
    };

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <section className="right_section">
            <form className={checkEntry ? "hidden" : ""}>
                <div className={nameError ? "card_name_entry error_text" : "card_name_entry"}>
                    <label htmlFor="card_name">Cardholder Name</label>
                    <input
                        type="text"
                        className={nameError ? "error" : ""}
                        id="card_name"
                        name="name"
                        placeholder="e.g. Jane Appleseed"
                        onInput={handleChange}
                        value={creditCardInfo.name}
                        required
                    />
                </div>

                <div className={numberError ? "card_number_entry error_text" : "card_number_entry"}>
                    <label htmlFor="card_number">Card Number</label>
                    <input
                        type="number"
                        className={numberError ? "error" : ""}
                        id="card_number"
                        name="number"
                        placeholder="e.g. 1234 5678 9123 0000"
                        onInput={handleChange}
                        value={creditCardInfo.number}
                        required
                    />
                </div>

                <div className="card_information">
                    <div className={yearError || monthError ? "card_date_entry error_text" : "card_date_entry"}>
                        <label htmlFor="card_date">Exp. Date (MM/YY)</label>
                        <div className="expiration_entry">
                            <div>
                                <input
                                    type="number"
                                    className={monthError ? "error" : ""}
                                    id="card_date"
                                    name="month"
                                    placeholder="MM"
                                    onInput={handleChange}
                                    value={creditCardInfo.month}
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    type="number"
                                    className={yearError ? "error" : ""}
                                    id="card_date"
                                    name="year"
                                    placeholder="YY"
                                    onInput={handleChange}
                                    value={creditCardInfo.year}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className={cvcError ? "card_cvc_entry error_text" : "card_cvc_entry"}>
                        <label htmlFor="card_cvc">CVC</label>
                        <input
                            type="number"
                            className={cvcError ? "error" : ""}
                            id="card_cvc"
                            name="cvc"
                            placeholder="e.g. 123"
                            onInput={handleChange}
                            value={creditCardInfo.cvc}
                            required
                        />
                    </div>
                </div>

                <button className="submit_btn" type="submit"
                onClick={entryValidation}>
                    Confirm
                </button>
            </form>

            <div className={checkEntry ? "thanks" : "hidden"}>
                <img src={CompleteIcon} alt="Complete Icon" />
                <h1>Thank You</h1>
                <p>We've added your card details</p>
                <button onClick={refreshPage}>Continue</button>
            </div>
        </section>
    );
};

export default Form;
