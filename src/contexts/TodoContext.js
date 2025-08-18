import { createContext, useContext } from "react";

// 1. Create Context and keept the data inside
export const TodoContext = createContext({
    todos: [],
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    toggleComplete: () => {},
})

// 2. Create and export ContextProvider
export const TodoProvider = TodoContext.Provider
// we do this to use TodoProvider instead
// TodoContext.Provider

// 3. Export Context Hook
export const useTodo = () => {
    return useContext(TodoContext)
}
// we do this to use useContext instead
// useContext(TodoContext)