// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  const [ToDo, setToDo] = useState([]);
  const [task , setTask] = useState("");

  const handle = (event)=>{
    setTask(event.target.value);
  }
  const addTask = ()=>{
    if(task !== ""){
      setToDo([...ToDo,task]);
      setTask("");
    }
  }

  const DeleteTask = (index) => {
    var newTodo = [...ToDo];
    newTodo.splice(index,1);
    setToDo(newTodo);
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  }

  return (
    <>
        <h1 className='title'>To-Do List</h1>
        <div className='input'>
            <input type="text" className='field' value={task} onKeyPress={handleKeyPress} onChange={handle} placeholder='Type Task to add to the List' />
            <button className='add' onClick={addTask} >+</button>
        </div>
        <div className='Items'>
        {ToDo.map((task , index)=>{
            return <div className='section' key={index}>
                      <div className='item'>{task}</div>
                      <div><button className='remove' onClick={()=>DeleteTask(index)}>Remove</button></div>
                  </div>

        })}
        </div>
    </>
  )
}

export default App;
