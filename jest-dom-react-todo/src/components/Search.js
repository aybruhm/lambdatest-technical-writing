import React from "react";

const TodoSearch = ({ value, onChange }) => {
	return (
		<div className="form-group">
			<input
				className="form-input"
				id="search"
				type="text"
				value={value}
				onChange={onChange}
				placeholder="Search for item..."
			/>
		</div>
	);
};

export default TodoSearch;
