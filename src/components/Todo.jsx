import React from 'react'
import './Todo.css'
import { useState, useEffect } from 'react'
import { addTodo, deleteTodo, removeTodo } from '../actions/action'
import {useDispatch, useSelector} from 'react-redux'




function Todo() {
    const dispatch = useDispatch();
    const list = useSelector((state)=>state.todoReducer.list)
    console.log(list)
    const [inputData, setInputData] = useState("");
    const [remove, setRemove] = useState("Checklist")
    useEffect(() => {
      if (list.length === 0) {
          setRemove("Checklist");
      } else {
          setRemove("Remove");
      }
  }, [list]);
    const HandleRemove = ()=>{
      dispatch(removeTodo(inputData))        
    }
        
    
    
  return (
<div className='main-box'>
<h3>Todo-List-React-Redux</h3>
<div className='box-1'>
    <input type="text" 
    placeholder='Add text here ...'
    value={inputData}
    onChange={(e)=>{setInputData(e.target.value)}}
    />
    <button className='btn' onClick={()=>{
      dispatch(addTodo(inputData))
      setInputData("")
    }  }>ADD</button>  
    
       
</div>
<div className='list'>

  {
  
    list?.map((item) => (
      <div className='list-item' key={item.id}> 
        <p className='text'>{item.data}</p>
        <button className='btn btn-1' onClick={() => dispatch(deleteTodo(item.id))}>Delete</button>  
      </div>
    ))
   
  }
      

   
</div>
  <button onClick={HandleRemove}>{remove}</button>
    </div>
  )
}

export default Todo