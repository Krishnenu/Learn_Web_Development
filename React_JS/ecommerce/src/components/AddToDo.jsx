import { useDispatch } from "react-redux";
import { addToDo } from "../feactures/todo/todoSlice";
import {useState} from 'react'


const AddToDo=()=>{

    const [todo,setToDo]=useState("");
    const dispatch=useDispatch();
    const addItemHandler=(e)=>{
        e.preventDefault();
        dispatch(AddToDo(todo));
        // setToDo("");
    }
    console.log(todo);
    return (
        <form onSubmit={(e)=>addItemHandler(e)}>
        <input type="text" placeholder="Enter Item to Add" onChange={(e)=>setToDo(e.target.value)} value={todo}/>
        <button >AddTODO</button>
        </form>
    )
}

export default AddToDo;