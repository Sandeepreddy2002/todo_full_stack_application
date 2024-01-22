import { useState } from "react";

export function CreateTodo() {
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event)=>{
    setTitle(event.target.value);
    
  } 
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }
  return (
    <div>
      <input placeholder="title" onChange={handleTitleChange} style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
      />
      <br />
      <br />
      <input placeholder="description" style={{
          padding: 10,
          margin: 10,
        }} onChange={handleDescriptionChange} type = "text"/>
      <br />
      <br />
      <button style={{
          padding: 10,
          margin: 10,
        }}  onClick={async ()=>{
          await fetch('http://localhost:3000/todo',{
            method:"POST",
            body :JSON.stringify({
              title : title,
              description : description,
              completed : false
            }),

            headers : {"Content-Type" : "application/json"}
          })

          //Set title and description empty 
          setTitle("")
          setDescription("")
        }}>Add a todo</button>
    </div>
  );
}
