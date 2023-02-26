import React from "react";
import s from "./styles/Todos.module.css"

export default function Todos({ listToDo, deleteToDo, todoCheck }) {
  let list = [...listToDo]
  return (
    <div className={s.Todos}>
      {
          list.map((t, i) => 
            <div key={i} className={s.CardTodo}>
              <button onClick={(t) => deleteToDo(t)} name="btnDeleteTodo" value={i}>X</button>
              <button onClick={(t) => deleteToDo(t)} name="btnEdithTodo" value={i}>Edit</button>
              <h2>{t}</h2>
              <input type={"radio"} onChange={(e)=>todoCheck(e)}/>
            </div>
        )
      }
    </div>
  );
}
