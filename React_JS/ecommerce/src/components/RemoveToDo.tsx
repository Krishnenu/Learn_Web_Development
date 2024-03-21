import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UpdateToDo from "./UpdateToDo";
import { removeTodo } from "../feactures/todo/todoSlice";
import './AddToDo.css';

const RemoveToDo = () => {
  const [editMode, setEditMode] = useState(false);
  const [textId, setTextId] = useState({});
  const todos = useSelector((state:any) => state.todos);
  const dispatch = useDispatch();

  const deleteTaskhandler = (id:string) => {
    dispatch(removeTodo(id));
    setEditMode(false);
  };

  const updateTaskHandler = (id:string, text:string) => {
    setTextId({ id: id, text: text });
    setEditMode(true);
  };

  const editHandler = () => {
    setEditMode(false);
  };

  return (
    <div>
      {editMode ? (
        <UpdateToDo load={textId} edit={editHandler} id={""} text={""} />
      ) : (
        <>
          {todos.map((item:any) => (
            <div key={item.id} >
              {item.text.trim() !== "" && (
                <div style={{ display: "flex",justifyContent: 'center'}}>
                  <p style={{width:"26%",textAlign:"left"}}>{item.text}</p>
                  <div style={{ display: "flex",justifyContent: 'center',padding:"5px"}}>
                  <button onClick={() => deleteTaskhandler(item.id)} className='btn'>
                    Delete
                  </button>
                  <button onClick={() => updateTaskHandler(item.id, item.text)} className='btn'>
                    Update
                  </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default RemoveToDo;
