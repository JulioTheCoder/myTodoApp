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
    dataLocal()?console.log("Hay algo en localStoage: "+dataLocal()):console.log("No hay nada en el local")
    setListToDo(dataLocal())
  },[])
  //*---------------------------------------------------------------------------------------


  //*--------------------------- Métodos CRUD ----------------------------------------------

  function addToDo(e){
    e.preventDefault();
    setAuxAdder(false);
    saveLocal([...listToDo, {id:listToDo.length ,content:e.target.toDoTitle.value}])
    setListToDo(dataLocal());
  }

  function updateToDo(e) {
    e.preventDefault();
    let list = listToDo;
    let indez;
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === e.target.value.id) {
        indez=i;
      }
    }
    list[indez].content = e.target.value.content
    saveLocal(list);
  }

  function deleteTodo(e){
    console.log(`Es de tipo ${ e.target.value}`);
    e.preventDefault();
    const newList = listToDo.filter( (t, i) =>{ 
      return (i.toString() !== e.target.value) && t 
    });
    saveLocal(newList)
    setListToDo(dataLocal());
  }

//*-----------------------------------------------------------------------------------------

  return(
    <div className={s.Home}>
      <Nav/>
      {/* <Sidebar/> */}
      <Todos listToDo={listToDo} deleteToDo={deleteTodo} updateToDo = {updateToDo} />
      <button onClick={e =>adder(e)}>Add</button>
      {
        auxAdder && <FormToDo addToDo={addToDo}/>
      }
    </div>
  )
}