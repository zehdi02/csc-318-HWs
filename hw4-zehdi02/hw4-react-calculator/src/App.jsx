import { useState } from 'react';
import './App.css'

function App() {

  const [result, setResult] = useState("");

  const handleClick = e => setResult(result.concat(e.target.id));

  const clear = () => setResult("");

  // const deleteEl = () => setResult(result.slice(0, -1));

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch(error) {
      setResult("Error");
    }
  }

  return (
    <div className='calculator flex flex-col gap-1.5'>
      <input className='border rounded border-gray-200 text-2xl px-2 pt-3 text-end placeholder-black'
        placeholder='0' type='text' value={result} disabled />
      
      <div className='buttons flex flex-col text-sm'>
        <div className='flex justify-between my-0.5 gap-2'>
          <button id='deg' className='op' onClick={handleClick}>Deg</button>
          <button id='fact' className='op' onClick={handleClick}>x!</button>

          <button id='(' className='op' onClick={handleClick}>(</button>
          <button id=')' className='op' onClick={handleClick}>)</button>
          <button id='%' className='op' onClick={handleClick}>%</button>
          <button className='op' onClick={clear}>AC</button>
        </div>

        <div className='flex justify-between my-0.5'>
          <button id='sin' className='op' onClick={handleClick}>sin</button>
          <button id='ln' className='op' onClick={handleClick}>ln</button>

          <button id='7' className='num' onClick={handleClick}>7</button>
          <button id='8' className='num' onClick={handleClick}>8</button>
          <button id='9' className='num' onClick={handleClick}>9</button>
          <button id='÷' className='op' onClick={handleClick}>÷</button>
        </div>

        <div className='flex justify-between my-0.5'>
          <button id='cos' className='op' onClick={handleClick}>cos</button>
          <button id='log' className='op' onClick={handleClick}>log</button>

          <button id='4' className='num' onClick={handleClick}>4</button>
          <button id='5' className='num' onClick={handleClick}>5</button>
          <button id='6' className='num' onClick={handleClick}>6</button>
          <button id='×' className='op' onClick={handleClick}>×</button>
        </div>
        
        <div className='flex justify-between my-0.5'>
          <button id='tan' className='op' onClick={handleClick}>tan</button>
          <button id='sqrt' className='op' onClick={handleClick}>√</button>

          <button id='1' className='num' onClick={handleClick}>1</button>
          <button id='2' className='num' onClick={handleClick}>2</button>
          <button id='3' className='num' onClick={handleClick}>3</button>
          <button id='-' className='op' onClick={handleClick}>-</button>
        </div>
        
        
        <div className='flex justify-between my-0.5'>
          <button id='exp' className='op' onClick={handleClick}>EXP</button>
          <button id='xy' className='op' onClick={handleClick}>x<sup>y</sup></button>
          
          <button id='0' className='num' onClick={handleClick}>0</button>
          <button id='.' className='num' onClick={handleClick}>.</button>
          <button id='eq' className='op' onClick={calculate}>=</button>
          <button id='+' className='op' onClick={handleClick}>+</button>
        </div>
      </div>
    </div>
  )
}

export default App