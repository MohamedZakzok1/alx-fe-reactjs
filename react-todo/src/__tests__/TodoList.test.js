/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-uses-react */
/* eslint-disable react/react-in-jsx-scope */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders the initial todo items", () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Practice Coding")).toBeInTheDocument();
    expect(screen.getByText("Read Documentation")).toBeInTheDocument();
  });

  test("allows users to add a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo...");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles the completed status of a todo", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    // Initially, the text should not be crossed out
    expect(todoItem).toHaveStyle("text-decoration: none");

    // Click to toggle completion
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");

    // Click again to undo completion
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo item", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");
    const deleteButton = todoItem.nextSibling;

    fireEvent.click(deleteButton);
    expect(todoItem).not.toBeInTheDocument();
  });
});
