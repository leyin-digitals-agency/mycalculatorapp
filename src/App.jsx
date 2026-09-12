
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


   function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondValue, setWaitingForSecondValue] = useState(false);
   

  const handleCalcDisplay = (value) =>  {

    
  };


    
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
        <button onClick={() => handleOperator("÷")}>/</button>
        <button onClick={() => handleOperator("÷")}>÷</button>
        <button onClick={() => handleOperator("-")}>—</button>

        <button onClick={ () => handleCalcDisplay(7)}>7</button>
        <button onClick={ () => handleCalcDisplay(8)}>8</button>
        <button onClick={ () => handleCalcDisplay(9)}>9</button>
        <button onClick={() => handleOperator("×")}>×</button>

        <button onClick={ () => handleCalcDisplay(4)}>4</button>
        <button onClick={ () => handleCalcDisplay(5)}>5</button>
        <button onClick={ () => handleCalcDisplay(6)}>6</button>
        <button onClick={() => handleOperator("-")}>-</button>

        <button onClick={() => handleCalcDisplay(1)}>1</button>
        <button onClick={() => handleCalcDisplay(2)}>2</button>
        <button onClick={() => handleCalcDisplay(3)}>3</button>
        <button className="equal" onClick={handleEquals}>=</button>

        <button onClick={() => handleCalcDisplay(0)} style={{ gridColumn: "span 4" }}>0</button>
      </div>
    </div>
  );
}

export default App;

