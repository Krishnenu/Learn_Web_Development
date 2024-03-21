import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateToDo } from "../feactures/todo/todoSlice";
import './AddToDo.css';

const UpdateToDo = ({
  load,
  edit,
}: {
  load: any;
  id: string;
  text: string;
  edit: any;
}) => {
  const [updatedText, setUpdatedText] = useState(load.text);
  const dispatch = useDispatch();

  const saveButtonHandler = () => {
    dispatch(updateToDo({ id: load.id, newText: updatedText }));
    setUpdatedText("");
    edit(false);
  };
  return (
    <div style={{ display: "flex",justifyContent: 'center' }}>
      <input
        type="input"
        onChange={(e) => setUpdatedText(e.target.value)}
        value={updatedText}
        className='input-box'
        style={{width:'20%'}}
      />
      <button onClick={saveButtonHandler} className='btn'>Save</button>
    </div>
  );
};

export default UpdateToDo;
