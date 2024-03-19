import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../feactures/todo/todoSlice";

const RemoveToDo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch=useDispatch();
  const deleteTaskhandler=(id)=>{
    dispatch(removeTodo(id));
  }
  return (
    <div >
      {todos.map((item) => (
        <div key={item.id}>
         {item.text.trim() !== "" && (
            <div style={{display:'flex'}}>
              <input type="checkbox" />
              <p>{item.text}</p>
              <button onClick={()=>deleteTaskhandler(item.id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default RemoveToDo;
