import { useState } from 'react';

const Player = (props) => {
	const { initialName, symbol } = props;

	const [playerName, setPlayerName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = () => {
		setIsEditing((editing) => !editing);
	};

	const handleNameChange = (event) => {
		setPlayerName(event.target.value);
	};

	return (
		<li>
			<span className="player">
				{isEditing ? (
					<input
						type="text"
						value={playerName}
						required
						onChange={handleNameChange}
					/>
				) : (
					<span className="player-name">{playerName}</span>
				)}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>
				{isEditing ? 'Save' : 'Edit'}
			</button>
		</li>
	);
};

export default Player;
