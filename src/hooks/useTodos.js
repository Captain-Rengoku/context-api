import { useEffect, useState } from "react";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [todo, ...prevTodos]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Load from localStorage
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("storageTodos"));
    if (storageTodos?.length) {
      setTodos(storageTodos);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("storageTodos", JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleComplete,
  };
};
