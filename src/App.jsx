import { useState } from "react";
import "./App.css";

function Header() {
	return (
		<>
			<h1 className="nameGame">Tic Tac Toe Game</h1>;
			<br />
		</>
	);
}

function Square({ value, onSquareClick }) {
	return (
		<button className="square" onClick={onSquareClick}>
			{value}
		</button>
	);
}

function App() {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);

	function Handler(i) {
		const nextSquares = squares.slice();
		xIsNext == true ? (nextSquares[i] = "X") : (nextSquares[i] = "O");
		setSquares(nextSquares);
		setXIsNext(!xIsNext);
	}

	return (
		<>
			<Header />
			<div className="board">
				<Square value={squares[0]} onSquareClick={() => Handler(0)} />
				<Square value={squares[1]} onSquareClick={() => Handler(1)} />
				<Square value={squares[2]} onSquareClick={() => Handler(2)} />
				<Square value={squares[3]} onSquareClick={() => Handler(3)} />
				<Square value={squares[4]} onSquareClick={() => Handler(4)} />
				<Square value={squares[5]} onSquareClick={() => Handler(5)} />
				<Square value={squares[6]} onSquareClick={() => Handler(6)} />
				<Square value={squares[7]} onSquareClick={() => Handler(7)} />
				<Square value={squares[8]} onSquareClick={() => Handler(8)} />
			</div>
		</>
	);
}

export default App;
