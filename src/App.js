
import React, { useState } from "react";
import './index.css'
import Todo from "./components/Todo";
function App() {
  const [inputValue, setInputValue] = useState('');
  const [task, setTask] = useState([]);
  

   const formHandler = (e) => {
    e.preventDefault();
    if(inputValue !== ""){
      const todo = {
        title:inputValue,
        update:false,
        completed:false,
        delete: false,
        id: Date.now().toString(36)
      }
    setTask([...task,todo]);
    
    setInputValue("");
  
    }
    else{
      alert("no task entered");
    }

    }

  
  const delTask = (id) => {
    console.log(id)
    const newTask = task.filter((ele) =>(
      ele.id !== id
      ) )
    console.log(newTask)
    setTask(newTask)

  }
  console.log(task)
 
  return(
    < >
    <div className="bg-[#0c0c24]">
    <h2 className="text-center  py-[1rem] text-white">TO DO LIST USING REACT</h2>
    <header className="my-[2rem]">
      <form className="text-center p-2 " onSubmit={formHandler}>
        <input placeholder="Enter the task" className="p-6 w-[75%] outline-none mx-2 rounded-xl"  
        type="text"
       value={inputValue} onChange = {(e) => {setInputValue(e.target.value) }}
         />
        <button className="bg-sky-600 p-6 px-5 rounded-xl">Add</button>
      </form>
    </header>
    <main> 


      {task.map((taskTo) => ( 
       
            <div key={taskTo.id} className="  rounded-xl bg-sky-600 flex justify-between align-center   w-[90%] md:w-[80%] m-auto  my-[0.5rem] ">
            <Todo taskTo = {taskTo} delTask={delTask} />
          
            
          </div>
      ))}
    </main>

    </div>

    </>

  )
}

export default App;
