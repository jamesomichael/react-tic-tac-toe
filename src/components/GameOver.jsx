import React from 'react';

const GameOver = (props) => {
	const { winner } = props;
	return (
		<div id="game-over">
			<h2>Game Over!</h2>
			{winner ? <p>{winner} won!</p> : <p>It&apos;s a draw!</p>}
			<p>
				<button>Rematch!</button>
			</p>
		</div>
	);
};

export default GameOver;
