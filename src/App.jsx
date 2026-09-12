import { useState } from 'react'
import './App.css'


  // class = className
    // onclick = onClick
    // style="" = style={{}}

    // Start your server with 
    // npm run dev 
    // and open the link shown in the terminal to view it in the browser.

    // To push to your github repository, you can use the following commands in your terminal:
    // git add .
    // git commit -m "Your commit message"
    // git push origin main

    // To pull changes from your github repository, you can use the following command in your terminal:
    // git pull origin main

function App() {

    const [displayValue, setDisplayValue] = useState(0);


    function displayNumber(number) {
        setDisplayValue(number);
    }

    const displayNumber2 = function(number) {
        setDisplayValue(number);
    }

    const arrowFunctions = (number) => {
        setDisplayValue(number);
    }

    //assignment 1 = What is an arrow function?
    //2: difference between an arrow function and a regular function
    // 3: Instead of replacing the display value, make it so that the number is added to the current display value. For example, if the current display value is 1 and you click on 2, the display value should become 12. If you click on 3 after that, the display value should become 123.



    return (
        <div className="calculator">
            {/* Make title color white */}
            <p className="title">Leyin's Calculator</p> 
            <input type="text" id="display" readOnly value={displayValue} />

            <div className="buttons">
                <button className="clear">C</button>
                <button>/</button>
                <button >*</button>
                <button>-</button>

                <button >7</button>
                <button >8</button>
                <button >9</button>
                <button >+</button>

                <button >4</button>
                <button >5</button>
                <button >6</button>
                <button >.</button>

                <button onClick={() => setDisplayValue(1)}>1</button>
                <button onClick={() => setDisplayValue(2)}>2</button>
                <button onClick={() => setDisplayValue(3)}>3</button>
                <button className="equal" >=</button>

                <button style={{ gridColumn: "span 4" }}  >0</button>
            </div>
        </div>
    )
}
export default App
