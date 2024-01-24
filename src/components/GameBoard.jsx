import { useState } from 'react';

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

const GameBoard = (props) => {
	const { onSquareSelect, turns } = props;

	let gameBoard = initialGameBoard;

	for (const turn of turns) {
		const {
			player,
			square: { row, col },
		} = turn;
		gameBoard[row][col] = player;
	}

	// const [gameBoard, setGameBoard] = useState(initialGameBoard);

	// const handleSquareSelect = (rowIndex, colIndex) => {
	// 	setGameBoard((prevGameBoard) => {
	// 		const updatedGameBoard = [
	// 			...prevGameBoard.map((innerArray) => [...innerArray]),
	// 		];
	// 		updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
	// 		return updatedGameBoard;
	// 	});

	// 	onSquareSelect();
	// };

	return (
		<ol id="game-board">
			{gameBoard.map((row, rowIdx) => (
				<li key={rowIdx}>
					<ol>
						{row.map((playerSymbol, colIdx) => (
							<li key={colIdx}>
								<button
									onClick={() =>
										onSquareSelect(rowIdx, colIdx)
									}
								>
									{playerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
};

export default GameBoard;
