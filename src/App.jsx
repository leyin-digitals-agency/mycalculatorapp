import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return(
    <div class="calculator">
    <input type="text" id="display" readonly/>

    <div class="buttons">
        <button class="clear" onclick="clearDisplay()">C</button>
        <button onclick="append('/')">/</button>
        <button onclick="append('*')">*</button>
        <button onclick="append('-')">-</button>

        <button onclick="append('7')">7</button>
        <button onclick="append('8')">8</button>
        <button onclick="append('9')">9</button>
        <button onclick="append('+')">+</button>

        <button onclick="append('4')">4</button>
        <button onclick="append('5')">5</button>
        <button onclick="append('6')">6</button>
        <button onclick="append('.')">.</button>

        <button onclick="append('1')">1</button>
        <button onclick="append('2')">2</button>
        <button onclick="append('3')">3</button>
        <button class="equal" onclick="calculate()">=</button>

        <button style="grid-column: span 4;" onclick="append('0')">0</button>
    </div>
</div>
    )
}
export default App
