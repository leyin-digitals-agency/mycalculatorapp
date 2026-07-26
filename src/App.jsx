import { useState } from 'react'
import './App.css'

function App() {

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


    return (
        <div className="calculator">
            {/* Make title color white */}
            <p className="title">Leyin's Calculator</p> 
            <input type="text" id="display" readOnly />

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

                <button >1</button>
                <button >2</button>
                <button >3</button>
                <button className="equal" >=</button>

                <button style={{ gridColumn: "span 4" }}  >0</button>
            </div>
        </div>
    )
}
export default App
