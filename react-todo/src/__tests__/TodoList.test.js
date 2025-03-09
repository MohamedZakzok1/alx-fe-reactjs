import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

// Test that the TodoList component renders correctly
test('renders the Todo List component', () => {
  render(<TodoList />);
  const heading = screen.getByText(/Todo List/i);
  expect(heading).toBeInTheDocument();
});

// Test that the initial todos are displayed
test('displays initial todos', () => {
  render(<TodoList />);
  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems).toHaveLength(3);
  expect(todoItems[0]).toHaveTextContent('Learn React');
});

// Test that a new todo can be added
test('can add a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('Add a new todo');
  const button = screen.getByText(/Add Todo/i);

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);

  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems).toHaveLength(4);
  expect(todoItems[todoItems.length - 1]).toHaveTextContent('New Todo');
});

// Test that toggling a todo works
test('can toggle a todo item', () => {
  render(<TodoList />);
  const todoItem = screen.getByText('Learn React');
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: line-through');
});

// Test that a todo item can be deleted
test('can delete a todo item', () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText(/Delete/i)[0];
  fireEvent.click(deleteButton);
  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems).toHaveLength(2);
});
