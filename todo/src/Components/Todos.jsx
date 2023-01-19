import React from "react";

export default function Todos({ listToDo, deleteToDo }) {
  let list = [...listToDo]
  return (
    <div className="todos">
      {
          list.map((t, i) => 
            <div key={i}>
              <button onClick={(t) => deleteToDo(t)} name="btnDeleteTodo" value={t}>X</button>
              <h2>{t}</h2>
            </div>
        )
      }
    </div>
  );
}
