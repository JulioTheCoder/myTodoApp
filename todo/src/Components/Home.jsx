import React from "react";
import Nav from "./Nav";
import Sidebar from "./SideBar";
import FormToDo from "./FormToDo";
import Todos from "./Todos";
import { useState } from "react";

export default function Home () {

  let listToDo = [
    "Crear CRUD para los ToDo's",
    "Que los ToDo's no se borren al refrescar",
    "Añadir los estilos corres pondientes",
    "Aplicar responsive desing",
    "todo category system"];
  let [auxAdder, setAuxAdder] = useState(false);

  function adder(e) {
    e.preventDefault();
    auxAdder?setAuxAdder(false): setAuxAdder(true);
    console.log("Ay parce, tienes: " + auxAdder);
  }

  function addToDo (value){
    listToDo.push (value)
  }

  return(
    <div className="home">
      <Nav/>
      <Sidebar/>
      <Todos listToDo={listToDo}/>
      <button onClick={e =>adder(e)}>Add</button>
      {
        auxAdder && <FormToDo addToDo={addToDo}/>
      }
    </div>
  )
}