import './App.css';
import Boton from './components/Boton';
import BotonClear from './components/BotonClear';
import Input from './components/Input';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import { BsBackspace } from 'react-icons/bs'

function App() {
	const [input, setInput] = useState('')

	const agregarInput = valor => {
		setInput(input + valor)
	}

	const calcularResultado = () => {
		if (input) {
			setInput(evaluate(input))
		}
	}

	const borrarNumero = () => {
		if (input.length > 1) {
			setInput(input.slice(0, -1))
		} else {
			setInput('')
		}

	}

	return (
		<div className="App">
			<div className='contenedor-calculadora'>
				<Input input={input} />
				<div className='fila'>
					<BotonClear manejarClear={() => setInput('')}> C </BotonClear>
					<BotonClear manejarClear={() => borrarNumero()}><BsBackspace /></BotonClear>

				</div>
				<div className='fila'>
					<Boton manejarClick={agregarInput}>7</Boton>
					<Boton manejarClick={agregarInput}>8</Boton>
					<Boton manejarClick={agregarInput}>9</Boton>
					<Boton manejarClick={agregarInput}>/</Boton>

				</div>
				<div className='fila'>
					<Boton manejarClick={agregarInput}>4</Boton>
					<Boton manejarClick={agregarInput}>5</Boton>
					<Boton manejarClick={agregarInput}>6</Boton>
					<Boton manejarClick={agregarInput}>*</Boton>

				</div>

				<div className='fila'>
					<Boton manejarClick={agregarInput}>1</Boton>
					<Boton manejarClick={agregarInput}>2</Boton>
					<Boton manejarClick={agregarInput}>3</Boton>
					<Boton manejarClick={agregarInput}>-</Boton>

				</div>

				<div className='fila'>
					<Boton manejarClick={agregarInput}>.</Boton>
					<Boton manejarClick={agregarInput}>0</Boton>
					<Boton manejarClick={calcularResultado}>=</Boton>
					<Boton manejarClick={agregarInput}>+</Boton>
				</div>
			</div>
		</div>
	);
}

export default App;
