function generateTodoItems() {
	const taskList = [
		"Schedule dentist appointment",
		"Buy groceries",
		"Email project update",
		"Plan weekend trip",
		"Water the plants",
		"Return library books",
		"Pick up dry cleaning",
		"Write birthday card",
		"Submit insurance claim",
	];

	const todos = [];
	for (let i = 0; i <= taskList.length - 1; i++) {
		const title = taskList[i];

		// Randomly determine completed status
		const completed = Math.random() < 0.5;

		todos.push({
			id: i,
			title: title,
			completed: completed,
		});
	}
	return todos;
}

export default generateTodoItems;
