import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
    const [input,setInput] = useState('');
    const dispatch = useDispatch();

    const todoHandler = (e)=>{
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');

    }
    return (
        <div className="p-5">
          <form
            onSubmit={todoHandler}
            className="flex flex-row gap-4 justify-center"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full max-w-md p-2 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Add a new task..."
            />
            <button
              type="submit"
              className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Add Todo
            </button>
          </form>
        </div>
      );
}

export default AddTodo