import './App.css';
import Button from './components/Button';
import Pantalla from './components/Pantalla';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  
  const [input, setInput] = useState('');


  const agregarInput = valor => {
    setInput(input + valor);
  };

  const reiniciarInput = () => {
    setInput('');
  };

  const realizarCalculo = () => {
    if (input !== ''){
      setInput(evaluate(input));
    }
    else{
      alert('Por favor ingrese un numero.');
    };
  };

  return (
    <div className='App'>
      <div className='contenedor-calculadora'>
        <Pantalla
          input={input}
        />
        <div className='fila'>
          <Button
            manejarClick = {agregarInput}
          >1</Button>
          <Button
            manejarClick = {agregarInput}
          >2</Button>
          <Button
            manejarClick = {agregarInput}
          >3</Button>
          <Button
            manejarClick = {agregarInput}
          >+</Button>
        </div>
        <div className='fila'>
          <Button
            manejarClick = {agregarInput}
          >4</Button>
          <Button
            manejarClick = {agregarInput}
          >5</Button>
          <Button
            manejarClick = {agregarInput}
          >6</Button>
          <Button
            manejarClick = {agregarInput}
          >-</Button>
        </div>
        <div className='fila'>
          <Button
            manejarClick = {agregarInput}
          >7</Button>
          <Button
            manejarClick = {agregarInput}
          >8</Button>
          <Button
            manejarClick = {agregarInput}
          >9</Button>
          <Button
            manejarClick = {agregarInput}
          >*</Button>
        </div>
        <div className='fila'>
          <Button
            manejarClick = {realizarCalculo}
          >=</Button>
          <Button
            manejarClick = {agregarInput}
          >0</Button>
          <Button
            manejarClick = {agregarInput}
          >.</Button>
          <Button
            manejarClick = {agregarInput}
          >/</Button>
        </div>
        <div className='fila'>
          <ButtonClear
          manejarClear = {reiniciarInput}
          >Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
