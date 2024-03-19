import { useDispatch } from "react-redux";
import { addToDo } from "../feactures/todo/todoSlice";
import {useState} from 'react'


const AddToDo=()=>{

    const [todo,setToDo]=useState("");
    const dispatch=useDispatch();
    const addItemHandler=(e)=>{
        e.preventDefault();
        dispatch(addToDo(todo));
        setToDo("");
    }
    return (
        <form onSubmit={(e)=>addItemHandler(e)}>
        <input type="text" placeholder="Enter Item to Add" onChange={(e)=>setToDo(e.target.value)} value={todo}/>
        <button >Add Task</button>
        </form>
    )
}

export default AddToDo;