import { TodoProvider } from "./contexts";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { useTodos } from "./hooks/useTodos";

function App() {
  const todoLogic = useTodos();
  return (
    <div>
      <TodoProvider value={todoLogic}>
        <div className="bg-slate-900 min-h-screen py-8">
          <div className="bg-slate-800/20 min-h-[95svh] w-full max-w-3xl mx-auto shadow-2xl rounded-lg px-4 py-3 text-slate-100">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Todo App With Context API
            </h1>
            <div className="mb-4">
              <TodoForm />
            </div>
            {todoLogic.todos.length === 0 ? (
              <p className="text-center text-slate-400 text-lg my-12">
                No todos yet! <br /> Add your first task to get started
              </p>
            ) : (
              <div className="flex flex-wrap gap-y-3 mt-8 mb-4">
                {todoLogic.todos.map((todo) => (
                  <div key={todo.id} className="w-full">
                    <TodoItem todo={todo} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </TodoProvider>
    </div>
  );
}

export default App;
