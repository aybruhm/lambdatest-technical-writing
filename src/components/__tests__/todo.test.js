import "@testing-library/jest-dom";
import { screen } from "@testing-library/dom";

test("should be in the document", () => {
	document.body.innerHTML = `
    <h1 data-testid="header">Todo App</h1>
  `;
	expect(screen.queryByTestId("header")).toBeInTheDocument();
});

test("should have attribute", () => {
	document.body.innerHTML = `
	<div data-testid="parent">
		<h1 id="header">Todo App</h1>
		<div data-testid="form-group">
			<input data-testid="form-input" type="text" placeholder="Search for item..." />
		</div>
		<p>Searches for {search ? search : "..."}</p>
	</div>
	`;

	const inputForm = screen.queryByTestId("form-input");
	expect(inputForm).toHaveAttribute("type", "text");
	expect(inputForm).not.toHaveAttribute("type", "number");
});

test("should have text content", () => {
	document.body.innerHTML = `
    <h1 data-testid="header">Todo App</h1>
  `;
	expect(screen.queryByTestId("header")).toHaveTextContent("Todo App");
	expect(screen.queryByTestId("header")).not.toHaveTextContent("Beautiful App");
});

test("should be visible", () => {
	document.body.innerHTML = `
	<div data-testid="parent">
		<h1 id="header" data-testid="child">Todo App</h1>
		<h6 data-testid="hidden">A fine todo application built with React</h6>
		<p data-testid="not-hidden" style="display: none">Searches for {search ? search : "..."}</p>
	</div>
	`;
	expect(screen.queryByTestId("hidden")).toBeVisible();
	expect(screen.queryByTestId("not-hidden")).not.toBeVisible();
});

test("should contain element", () => {
	document.body.innerHTML = `
	<div data-testid="parent">
		<h1 id="header" data-testid="child">Todo App</h1>
		<p>Searches for {search ? search : "..."}</p>
	</div>
	`;
	expect(screen.queryByTestId("parent")).toContainElement(
		screen.queryByTestId("child")
	);
	expect(screen.queryByTestId("parent")).not.toContainElement(
		screen.queryByTestId("grandchild")
	);
});
test("should contain html", () => {
	document.body.innerHTML = `
	<div data-testid="parent">
		<h1 id="header">Todo App</h1>
		<p>Searches for {search ? search : "..."}</p>
	</div>
	`;
	expect(screen.queryByTestId("parent")).toContainHTML(
		'<h1 id="header">Todo App</h1>'
	);
});
