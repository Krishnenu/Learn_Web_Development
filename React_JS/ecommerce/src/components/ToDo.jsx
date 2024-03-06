import { useSelector } from "react-redux";



const ToDo=()=>{
    const todos=useSelector(state=>state.todos);
    return (
        <div>{todos.map((item)=><h1>{item.text}</h1>)}</div>
    )
}
export default ToDo;