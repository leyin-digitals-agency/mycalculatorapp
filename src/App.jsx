
import { useState } from 'react'
import './App.css'



// class = className
// onclick = onClick
// style="" = style={{}}

// Start your server with npm run dev and open the link shown in the terminal to view it in the browser.

// To push to your github repository, you can use the following commands in your terminal:
// git add .
// git commit -m "Your commit message"
// git push origin main

// To pull changes from your github repository, you can use the following command in your terminal:
// git pull origin main




//Assignment
// 1. Read about operators in JavaScript. List and explain them in a word document:
// 2. Tenary operators
// 3. Explain why an operator button becomes blue when clicked on


function App() {

    // 1. Display numbers on screen when clicked
    // 1b. Instead of replacing the display value, make it so that the number is added to the current display value.
    // 2. Display operators on screen when clicked
    // 3. Perform calculations when the equal button is clicked
    // 4. Clear the display when the clear button is clicked

    const [displayValue, setDisplayValue] = useState("0");
    const [operator, setOperator] = useState(null);


    const handleDisplay = (value) => {
        if (displayValue === "0") {
            setDisplayValue(value);
        } else {
            setDisplayValue(displayValue + value);
        }
    };

    const handleClear = () => {
        setDisplayValue("0");
    }

    const handleOperator = (op) => {
        setOperator(op);
    }


    return (
        <div className="calculator">
            {/* Make title color white */}
            <p className="title">Leyin's Calculator</p>

            <input
                type="text"
                id="display"
                readOnly
                value={displayValue}
            />

            <div className="buttons">
                <button className="clear" onClick={handleClear}>C</button>
                <button className={operator === "÷" ? 'active_operator' : ''} onClick={() => handleOperator("÷")}>/</button>
                <button className={operator === "÷" ? 'active_operator' : ''} onClick={() => handleOperator("÷")}>÷</button>
                <button className={operator === "+" ? 'active_operator' : ''} onClick={() => handleOperator("+")}>+</button>

                <button onClick={() => handleDisplay("7")}>7</button>
                <button onClick={() => handleDisplay("8")}>8</button>
                <button onClick={() => handleDisplay("9")}>9</button>
                <button className={operator === "x" ? 'active_operator' : ''} onClick={() => handleOperator("x")}>x</button>

                <button onClick={() => handleDisplay("4")}>4</button>
                <button onClick={() => handleDisplay("5")}>5</button>
                <button onClick={() => handleDisplay("6")}>6</button>
                <button className={operator === "-" ? 'active_operator' : ''} onClick={() => handleOperator("-")}>-</button>

                <button onClick={() => handleDisplay("1")}>1</button>
                <button onClick={() => handleDisplay("2")}>2</button>
                <button onClick={() => handleDisplay("3")}>3</button>
                <button className="equal" >=</button>

                <button onClick={() => handleDisplay("0")} style={{ gridColumn: "span 4" }}>0</button>
            </div>
        </div>
    );
}

export default App;

