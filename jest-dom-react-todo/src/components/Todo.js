import React from "react";

const Todo = ({ todo }) => {
	const { id, title, completed } = todo;
	const h3 = <h3>{title}</h3>;
	const text = completed ? <strike>{h3}</strike> : h3;
	return (
		<div className="todo-item" id={`todo-${id}`}>
			{text}
		</div>
	);
};

export default Todo;
