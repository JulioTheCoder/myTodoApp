import React from "react";
import s from "./styles/Todos.module.css"

export default function Todos({ listToDo, deleteToDo, updateToDo, todoCheck }) {
  let list = [...listToDo]
  return (
    <div className={s.Todos}>
      {
        
        list.length>0?
          list.map((t, i) => 
            <div key={t.id} className={s.CardTodo}>
              <button onClick={(e) => deleteToDo(e)} name="btnDeleteTodo" value={t.id}>X</button>
              <button onClick={(e) => updateToDo(e)} name="btnEdithTodo" value={t}>Edit</button>
              <h2>{t.content}</h2>
              <input type={"radio"} onChange={(e)=>todoCheck(e)}/>

            </div>
            
        ):
        <p>No hay elementos</p>
      }
    </div>
  );
}
