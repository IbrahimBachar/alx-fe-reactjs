import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders the initial todo list", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Practice Testing")).toBeInTheDocument();
  });

  test("adds a new todo item", () => {
    render(<TodoList />);
    
    fireEvent.change(screen.getByPlaceholderText("Add new todo"), {
      target: { value: "New Todo" },
    });
    fireEvent.click(screen.getByText("Add"));

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList />);
    
    const todoItem = screen.getByText("Learn React");
    fireEvent.click(todoItem);

    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo item", () => {
    render(<TodoList />);
    
    const deleteButton = screen.getAllByText("Delete")[0];
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
