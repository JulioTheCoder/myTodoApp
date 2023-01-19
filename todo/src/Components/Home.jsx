import React from "react";
import Nav from "./Nav";
import Sidebar from "./SideBar";
import FormToDo from "./FormToDo";
import Todos from "./Todos";
import { useState } from "react";

export default function Home () {

  const [listToDo, setListToDo] = useState(([
    "Crear CRUD para los ToDo's",
    "Que los ToDo's no se borren al refrescar",
    "Añadir los estilos corres pondientes",
    "Aplicar responsive desing",
    "todo category system",
    "todo description"]));
  let [auxAdder, setAuxAdder] = useState(false);
console.log(`${listToDo}`);
  function adder(e) {
    e.preventDefault();
    auxAdder?setAuxAdder(false): setAuxAdder(true);
    console.log("Ay parce, tienes: " + auxAdder);
  }

  //*--------------------------- Métodos CRUD----------------------------------------------

  function addToDo(e){
    e.preventDefault()
    setListToDo([...listToDo, e.target.toDoTitle.value]);
  }

  function deleteTodo(e){
    console.log(`Es de tipo ${typeof e.target.value}`);
    e.preventDefault();
    const newList = listToDo.filter( (t, i) =>{ 
      console.log(`i: ${ i} y t: ${t}`);
      return (i.toString() !== e.target.value) && t 
    });
    console.log(`NewList ${newList}`);
    setListToDo(newList);
  }

//*-----------------------------------------------------------------------------------------

  return(
    <div className="home">
      <Nav/>
      <Sidebar/>
      <Todos listToDo={listToDo} deleteToDo={deleteTodo}/>
      <button onClick={e =>adder(e)}>Add</button>
      {
        auxAdder && <FormToDo addToDo={addToDo}/>
      }
    </div>
  )
}