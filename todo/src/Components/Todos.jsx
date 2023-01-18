import React from "react";

export default function Todos({ listToDo }) {
  let list = [...listToDo]
  return (
    <div className="todos">
      {list=list.map((t, i) => 
          <div key={i}>
            <h2>{t}</h2>
          </div>
      )
      }
    </div>
  );
}
