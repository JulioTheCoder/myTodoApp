import React from "react";
import s from "./styles/Todos.module.css"

export default function Todos({ listToDo, deleteToDo }) {
  let list = [...listToDo]
  return (
    <div className={s.Todos}>
      {
          list.map((t, i) => 
            <div key={i}>
              <button onClick={(t) => deleteToDo(t)} name="btnDeleteTodo" value={i}>X</button>
              <button onClick={(t) => deleteToDo(t)} name="btnEdithTodo" value={i}>Edit</button>
              <h2>{t}</h2>
            </div>
        )
      }
    </div>
  );
}
