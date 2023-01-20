import React from "react";
import Nav from "./Nav";
import Sidebar from "./SideBar";
import FormToDo from "./FormToDo";
import Todos from "./Todos";
import { useState, useEffect } from "react";

export default function Home () {

  const [listToDo, setListToDo] = useState(([]));
  let [auxAdder, setAuxAdder] = useState(false);


  console.log(`${listToDo}`);
  function adder(e) {
    e.preventDefault();
    auxAdder?setAuxAdder(false): setAuxAdder(true);
    console.log("Ay parce, tienes: " + auxAdder);
  }

  function saveLocal(data){
    localStorage.setItem("toDos", JSON.stringify(data));
  }

  function dataLocal() {
    return JSON.parse(localStorage.getItem("toDos"))
  }

  //*--------------------------- LifeCycle -------------------------------------------------
  useEffect(() =>{
    setListToDo(dataLocal())
  },[])
  //*---------------------------------------------------------------------------------------

  //*--------------------------- Métodos CRUD ----------------------------------------------

  function addToDo(e){
    e.preventDefault()
    saveLocal([...listToDo, e.target.toDoTitle.value])
    setListToDo(dataLocal());
  }

  function deleteTodo(e){
    console.log(`Es de tipo ${typeof e.target.value}`);
    e.preventDefault();
    const newList = listToDo.filter( (t, i) =>{ 
      return (i.toString() !== e.target.value) && t 
    });
    saveLocal(newList)
    setListToDo(dataLocal());
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