import React from "react";
import Nav from "./Nav";
import Sidebar from "./SideBar";
import FormToDo from "./FormToDo";
import Todos from "./Todos";
import { useState, useEffect } from "react";
import s from "./styles/Home.module.css"

export default function Home () {

  const [listToDo, setListToDo] = useState(([]));
  let [auxAdder, setAuxAdder] = useState(false);
  const [listToDoCheck, setListToDoCheck] = useState([]);

  console.log(`${listToDo}`);
  function adder(e) {
    e.preventDefault();
    auxAdder?setAuxAdder(false): setAuxAdder(true);
  }

//*---------------------------- Methods with localStorage---------------------------------
  function saveLocal(data){
    localStorage.setItem("toDos", JSON.stringify(data));
  }

  function dataLocal() {
    return JSON.parse(localStorage.getItem("toDos"))
  }
  //*---------------------------------------------------------------------------------------


  //*--------------------------- LifeCycle -------------------------------------------------
  useEffect(() =>{
    setListToDo(dataLocal())
  },[])
  //*---------------------------------------------------------------------------------------


  //*--------------------------- Métodos CRUD ----------------------------------------------

  function addToDo(e){
    e.preventDefault();
    setAuxAdder(false);
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

  function putTodo(e) {
    e.preventDefault();

  }

//*-----------------------------------------------------------------------------------------

  return(
    <div className={s.Home}>
      <Nav/>
      {/* <Sidebar/> */}
      <Todos listToDo={listToDo} deleteToDo={deleteTodo}/>
      <button onClick={e =>adder(e)}>Add</button>
      {
        auxAdder && <FormToDo addToDo={addToDo}/>
      }
    </div>
  )
}