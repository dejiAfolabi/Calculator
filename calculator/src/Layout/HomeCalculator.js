import React, { useState } from 'react'
import './calculator.css'
import NumberItem from '../Components/NumberItem'

const HomeCalculator = () => {
  const [display, setDisplay] = useState('0')
  const [oldValue, setOldValue] = useState(0)


  const checkOperator = (op) => {
  const displayString = display.toString();
    const operator = Number(displayString.substring(displayString.length - 1));
    if (operator > - 1) return false;
    setDisplay(prev => displayString.substring(0, displayString.length - 1) + op);
    return true;
  };
  const updateDisplay = (operator) => {
    if (operator !== '.')
      setOldValue('');
    console.log(oldValue);
    if (operator === "=") {
      setDisplay(eval(display))
    } else if (operator === "+") {
      if (checkOperator('+')) return;
            setDisplay((prev) => prev + "+" )
            setOldValue("")

    } else if (operator === "-") {
          if (checkOperator('-')) return;
            setDisplay((prev) => prev + "-" )
            setOldValue(0)
            
    } else if (operator === "*") {
        if (checkOperator('-')) return;
          setDisplay((prev) => prev + "*" )
          setOldValue(0)

    } else if (operator === "/") {
      if (checkOperator('-')) return;
          setDisplay((prev) => prev + "/" )
          setOldValue(0)

    } else if (operator === "%") {
      const percentage = eval(display) / 100;
          setDisplay(percentage)
          setOldValue(0)
    }  else if (operator === ']') {
      const root = Math.sqrt(eval(display));
          setDisplay(root)
          setOldValue(0)
          
    } else if (operator === ".") {
      if (checkOperator('.') || oldValue.toString().includes('.')) return;
        setDisplay((prev) => prev + "." )
        setOldValue((prev) => prev + "." )

    }
  }

  const handleDisplay = (num) => {
    setDisplay(prev => prev + Number(num));
    setOldValue(prev => prev + num);
  }
    
  return (
    <div className="container">
        <div className='numberSpace'>
            {display}
        </div>
        <div className='numberPad'>
          <div className='sideSigns'>
            <div className='signs' onClick={() => updateDisplay('%')}>%</div>
            <div className='signs' onClick={() => updateDisplay(']')}>&radic;</div>
            <div onClick={() => {setDisplay(''); setOldValue('') }} className='signs'>CE</div>
            <div onClick={() => {setDisplay(''); setOldValue('') }} className='sign2'>ON/C</div>
          </div>
          <div className='numbers'>
            <NumberItem setDisplay={handleDisplay} num='7'/>
            <NumberItem setDisplay={handleDisplay} num='8'/>
            <NumberItem setDisplay={handleDisplay} num='9'/> 
            <NumberItem setDisplay={handleDisplay} num='4'/>
            <NumberItem setDisplay={handleDisplay} num='5'/>
            <NumberItem setDisplay={handleDisplay} num='6'/>
            <NumberItem setDisplay={handleDisplay} num='1'/>
            <NumberItem setDisplay={handleDisplay} num='2'/>
            <NumberItem setDisplay={handleDisplay} num='3'/>
            <NumberItem setDisplay={handleDisplay} num='0'/>
            <div onClick={() => updateDisplay('.')}>.</div>
            <div>+/_</div>
          </div>
          <div className='sideSigns'>
                <div className='signs' onClick={() => updateDisplay('/')}>&divide;</div>
                <div className='signs' onClick={() => updateDisplay('*')}>*</div>
                <div className='signs' onClick={() => updateDisplay('-')}>-</div>
                <div onClick={() => updateDisplay('+')} className='signs'>+</div>
          </div>

          
        </div>

                <div onClick={() => {
              const result = eval(display);
              setDisplay(result)
                }} className='signs3'>=</div>
    </div>  
  )
}


export default HomeCalculator
