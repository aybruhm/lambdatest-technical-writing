import "./App.css";
import React from "react";
import Todo from "./components/Todo";
import TodoSearch from "./components/Search";
import generateTodoItems from "./helpers/todoGenerator";

function App() {
	const todos = generateTodoItems();
	const [search, setSearch] = React.useState("");

	const handleChange = (event) => {
		setSearch(event.target.value);
	};

	const filteredTodos = todos.filter((todo) => {
		return todo.title.toLowerCase().includes(search.toLowerCase());
	});

	return (
		<div className="App">
			<div>
				<h1 id="header">Todo App</h1>
				<TodoSearch value={search} onChange={handleChange}>
					Search:
				</TodoSearch>

				<p>Searches for {search ? search : "..."}</p>
			</div>

			{filteredTodos.map((todo) => {
				return <Todo key={todo.id} todo={todo} />;
			})}
		</div>
	);
}

export default App;
