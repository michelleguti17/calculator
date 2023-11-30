
import './App.css';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import React, { useState, useEffect } from 'react';
import { evaluate } from 'mathjs';
function App() {
 
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const calculateResult = () => {
    try {
      const result = evaluate(input);
      setHistory((prevHistory) => [...prevHistory, { expression: input, result }]);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };



  useEffect(() => {
    console.log('Historial:', history);
  }, [input, history]);



  return (
    <div className="App">
     <div className='title'>
      <h2>Calculator</h2>
     </div>
     <div className='calculator-container'>
      <Pantalla input={input}/>
      <div className='row'>
        <Boton  clickManage={()=> handleButtonClick('1')}>1</Boton>
        <Boton clickManage={()=> handleButtonClick('2')}>2</Boton>
        <Boton clickManage={()=> handleButtonClick('3')}>3</Boton>
        <Boton clickManage={()=> handleButtonClick('+')}>+</Boton>
      </div>
      <div className='row'>
        <Boton clickManage={()=> handleButtonClick('4')}>4</Boton>
        <Boton clickManage={()=> handleButtonClick('5')}>5</Boton>
        <Boton clickManage={()=> handleButtonClick('6')}>6</Boton>
        <Boton clickManage={()=> handleButtonClick('-')}>-</Boton>
      </div>
      <div className='row'>
        <Boton clickManage={()=> handleButtonClick('7')}>7</Boton>
        <Boton clickManage={()=> handleButtonClick('8')}>8</Boton>
        <Boton clickManage={()=> handleButtonClick('9')}>9</Boton>
        <Boton clickManage={()=> handleButtonClick('*')}>*</Boton>
      </div>
      <div className='row'>
        <Boton clickManage={()=> handleButtonClick('0')}>0</Boton>
        <Boton clickManage={()=> handleButtonClick('.')}>.</Boton>
        <Boton clickManage={calculateResult}>=</Boton>
        <Boton clickManage={()=> handleButtonClick('/')}>/</Boton>
      </div>
      <div className='row'>
        <BotonClear clearManage={()=> setInput('')}>Clear</BotonClear>
      </div>
     </div>
    </div>
  );
}

export default App;
