const GameBoard = (props) => {
	const { onSquareSelect, board } = props;
	return (
		<ol id="game-board">
			{board.map((row, rowIdx) => (
				<li key={rowIdx}>
					<ol>
						{row.map((playerSymbol, colIdx) => (
							<li key={colIdx}>
								<button
									onClick={() =>
										onSquareSelect(rowIdx, colIdx)
									}
									disabled={playerSymbol !== null}
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
