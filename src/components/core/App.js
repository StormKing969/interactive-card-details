import { useState } from "react";
import Card from "../card/Card";
import Form from "../form/Form";
import "./App.css";

function App() {
    const [creditCardInfo, setCreditCardInfo] = useState({
        number: "",
        name: "",
        month: "",
        year: "",
        cvc: "",
    });

    return (
        <div className="App">
            <Card creditCardInfo={creditCardInfo} />
            <Form
                creditCardInfo={creditCardInfo}
                setCreditCardInfo={setCreditCardInfo}
            />
        </div>
    );
}

export default App;
