import React from "react";

export default function FormToDo({addToDo}) {
  return(
    <div>
      <form onSubmit={(e) => addToDo(e)}>
        <input type={"text"} name={"toDoTitle"}></input>
        <button>Listo</button>
      </form>
    </div>
  )
}