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
        <main className="App">
            <Card creditCardInfo={creditCardInfo} />
            <Form
                creditCardInfo={creditCardInfo}
                setCreditCardInfo={setCreditCardInfo}
            />
        </main>
    );
}

export default App;
