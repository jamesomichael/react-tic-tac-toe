const Log = (props) => {
	const { turns } = props;
	return (
		<ol id="log">
			{turns.map(({ player, square: { row, col } }) => (
				<li key={`${row}${col}`}>
					{player} selected {row},{col}
				</li>
			))}
		</ol>
	);
};

export default Log;
