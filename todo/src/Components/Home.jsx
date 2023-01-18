import React from "react";
import Nav from "./Nav";
import Sidebar from "./SideBar";
import FormToDo from "./FormToDo";
import Todos from "./Todos";

export default function Home () {

  let listToDo = ["Solucionar el renderizado condicional"];
  let auxAdder = true;

  function adder(e) {
    e.preventDefault();
    auxAdder?auxAdder = false: auxAdder = true;
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