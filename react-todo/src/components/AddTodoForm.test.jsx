import { render, screen, fireEvent } from "@testing-library/react";
import AddTodoForm from "./AddTodoForm";

test("calls onAdd when submitting a new todo", () => {
  const mockOnAdd = jest.fn();
  render(<AddTodoForm onAdd={mockOnAdd} />);

  const input = screen.getByPlaceholderText("Add a new todo");
  fireEvent.change(input, { target: { value: "New Task" } });

  const addButton = screen.getByText("Add Todo");
  fireEvent.click(addButton);

  expect(mockOnAdd).toHaveBeenCalledWith("New Task");
});
