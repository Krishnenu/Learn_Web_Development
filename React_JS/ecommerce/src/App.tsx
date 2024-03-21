import "./App.css";
import AddToDo from "./components/AddToDo";
import RemoveToDo from "./components/RemoveToDo";

function App() {
  return (
    <div className="App">
      <AddToDo />
      <RemoveToDo />
    </div>
  );
}

export default App;
