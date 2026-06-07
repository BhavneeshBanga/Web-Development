'use client'
import { useEffect, useState } from "react";
import Navbar from "./component/Navbar";

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { v4 as uuidv4 } from "uuid";



export default function Home() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString)
    {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos);
    }
  }, []);




  const toggleFinished = (e) => {
    setShowFinished(!showFinished)
  };


const SaveToLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todos))
};

  const handleadd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")


  }
  const handleedit = (e, id) => {
    let t = todos.filter(i => i.id === id);
    setTodo(t[0].todo);
     const newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    SaveToLocalStorage()

    // setTodos([...todos, { todo, isCompleted: false }])
    // setTodo("")
  }

  const handleChange = (e) => {
    setTodo(e.target.value)

  }
  const handledelete = (e, id) => {
    const newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    SaveToLocalStorage()

  }
  const handlecheckbox = (e) => {
    let id = e.target.id;
    let index = todos.findIndex(item => {
      return item.id === id;
      SaveToLocalStorage()
    })

    let newtodos = [...todos];    //abhi new todos ek new array hai
    newtodos[index].isCompleted = !newtodos[index].isCompleted
    setTodos(newtodos)
    SaveToLocalStorage()

  }

  return (
    <>
      <Navbar />
     
      <div className="mx-3 md:container bg-violet-100 md:mx-auto p-5 rounded-xl my-5 text-black min-h-[80vh] md:w-1/2 ">
      <h1 className="font-bold text-center text-xl">iTask - Manager Your todos at one place</h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className="text-lg font-extrabold text-gray-500 my-5 text-center ">Add a Todo</h2>
          <div className="flex">

          <input  onChange={handleChange} value={todo} className="bg-white w-full rounded-xl p-5" type="text" />

          <button onClick={handleadd} disabled={todo.length < 3} className="bg-violet-800 hover:bg-violet-900 text-white rounded-md p-3 disabled:bg-red-800 py-1 rounded-full text-sm font-bold  cursor-pointer mx-2">Save</button>
          </div>

     
        </div>

        <input className="hover:cursor-pointer my-4" onChange={toggleFinished} type="checkbox" checked={showFinished} />Show Finished


        <h1 className=" text-xl font-bold">Your Todos</h1>
        <div className="todos">
          {todos.length === 0 && (
            <div className="bg-gradient-to-r from-violet-100 to-purple-100 border border-violet-300 rounded-xl p-8 text-center my-6 shadow-lg">
              <div className="text-6xl mb-4 p-34">🚀</div>

              <h2 className="text-2xl font-bold text-violet-800">
                Nothing Here Yet
              </h2>

              <p className="text-violet-600 mt-2">
                Create your first todo and conquer your day!
              </p>
            </div>
          )}



          {todos.map(item => {
            return(showFinished || !item.isCompleted) && (<div key={item.id} className="todo flex  justify-between my-3">
              <div className="flex gap-5">

                <input className="hover:cursor-poinse" onChange={handlecheckbox} type="checkbox" value={item.isCompleted} checked={item.isCompleted} name="" id={item.id} />

                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>
              <div className="buttons flex h-full">

                <button onClick={(e)=>{handleedit(e, item.id)}} className="bg-green-800 cursor-pointer  hover:bg-green-900 text-white rounded-md p-3 py-1 mx-1 text-sm font-bold">
                  <FaEdit/>
                </button>
                <button onClick={(e) => { handledelete(e, item.id) }} className="bg-red-800 hover:bg-red-900 text-white rounded-md p-3 py-1   cursor-pointer text-sm font-bold mx-1">
                  <MdDelete/>
                </button>

              </div>
            </div>)
          })}
        </div>
      </div></>
  );
}
