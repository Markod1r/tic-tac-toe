import { useState } from "react";
import "./App.css";

function Header() {
	return (
		<>
			<h1 className="words">Tic Tac Toe Game</h1>
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
		if (squares[i] || calculateWinner(squares)) return;

		const nextSquares = squares.slice();
		nextSquares[i] = xIsNext ? "X" : "O";
		setSquares(nextSquares);
		setXIsNext(!xIsNext);
	}

	const winner = calculateWinner(squares);
	let status = "";
	if (winner) {
		status = `the winner is ${winner}`;
	} else {
		status = "the next player is " + (xIsNext ? "x" : "o").toUpperCase();
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
			<h3 className="words">{status}</h3>
		</>
	);
}

function calculateWinner(square) {
	const rules = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < rules.length; i++) {
		const [a, b, c] = rules[i];
		if (square[a] == square[b] && square[b] == square[c]) {
			return square[a];
		}
	}
	return false;
}

export default App;
