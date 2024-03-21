import { PayloadAction, createSlice ,nanoid} from "@reduxjs/toolkit";

interface Todo {
    id: string;
    text: string;
}
interface TodoState {
    todos: Todo[];
}
const initialState:TodoState = {
    todos: [],
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addToDo:(state,action:PayloadAction<string>)=>{
            const todo: Todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action:PayloadAction<string>)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload);

        },
        updateToDo: (state, action: PayloadAction<{ id: string; newText: string }>) => {
            const { id, newText } = action.payload;
            state.todos = state.todos.map((todo) =>
              todo.id === id ? { ...todo, text: newText } : todo
            );
        },
    }

})

export const {addToDo,removeTodo,updateToDo}=todoSlice.actions;

export const todoReducer= todoSlice.reducer;