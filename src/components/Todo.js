import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck, faPen, faTrash} from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'


function Todo( {taskTo,delTask}) {
  
  
  const [line ,setLine] = useState(taskTo.completed);
  const [isread, setIsread] = useState(taskTo.update)
  const [todo,setTodo] = useState(taskTo.title)

 
  return (
    <>
          <div className='px-3'>
          <textarea name="" id=""  value={todo} readOnly={!isread} className={`${isread ? "text-[#49be25]":""} px-3 mt-5  bg-sky-600 outline-none md:w-[45rem] scrollbar-hide resize-none ${line ? "text-[#AFB0B0] line-through ": "text-white"}` } onChange={(e) => setTodo(e.target.value)}></textarea>
          </div>
           <div className=" flex justify-between align-center  ">
           {!line && <div className="py-5 px-2 md:p-5"><FontAwesomeIcon icon={faPen} className="pen hover:text-white" onClick = {() => setIsread(!isread)}
           /></div>}
           <div  className="py-5 px-2 md:p-5">
           <FontAwesomeIcon icon={faCircleCheck} className="hover:text-white" onClick={ () => { 
            setLine(!line)
          }}  />
           </div>
           <div  className="py-5 px-2 md:p-5">
           <FontAwesomeIcon icon={faTrash} className="hover:text-red-600" onClick={ () => delTask(taskTo.id)}
           
           />
           </div>
          
           </div>
    
    </>
  )
}

export default Todo
