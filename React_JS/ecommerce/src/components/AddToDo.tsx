import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../feactures/todo/todoSlice';
import './AddToDo.css';

const AddToDo= () => {
  const [todo, setToDo] = useState<string>('');
  const dispatch = useDispatch();

  const addItemHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addToDo(todo));
    setToDo('');
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setToDo(e.target.value);
  };
  return (
    <form onSubmit={(e) => addItemHandler(e)} style={{marginBottom:"2%"}}>
      <input type="text" placeholder="Enter Item to Add" onChange={(e) => handleInputChange(e)} value={todo} className='input-box'/>
      <button className='btn'>Add Task</button>
    </form>
  );
};

export default AddToDo;
