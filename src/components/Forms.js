
   import React, { useState } from "react";

export default function Forms(props) {
  
  const handleOnChange = (e) => {

    setText(e.target.value);
    
  };
  const handleUpClick = () => {
    console.log("Up clicked");

    setText(text.toUpperCase());
  };
  const handleDownClick = () => {
    console.log("Down clicked");

    setText(text.toLowerCase());
  };
  const deletetext = () => {
    console.log("delete clicked");

    setText("");
  };
  const addnote = () => {
    if (!text) {
      alert("Please enter text");
      return;
    
      
    }
    else if(text && !toggle){
      setNotes(notes.map((note) => {
        if (note.id === isEdit) {
          
        
        return {...note, name:text }
      
      }
      }))
      setToggle(true);
      setText("");
    }
    else
    {console.log("add note clicked");
    const inputText = { id: new Date().getTime().toString(), name: text };
    setNotes([...notes, inputText]);
    setText('');
    deletetext();}
  };
  const ClearAll = () => {
    console.log("Clear all clicked");
    setText("");
    setNotes([]);
  }
  const Removenote = (id) => {
    console.log("Remove note clicked");
    console.log(id);
   const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  }
  
  const Editnote = (index) => {
   console.log("Edit note clicked");
   let neweditnote = notes.find((note) => note.id === index);
   
   setToggle(false);
   setText(neweditnote.name);
   setIsEdit(index)

  }
  const [text, setText] = useState("");
  const [toggle, setToggle] = useState(true);
  const [isEdit, setIsEdit] = useState(null);
  
  const [notes, setNotes] = useState([]);
  
  const [seconds, setSeconds] = useState(0);
  let a = text.split(" ");
  let b =0;
  let c=0;
  for (let index = 0; index < a.length; index++) {
      if(a[index] === ""){

        c++;
      }
      else{
          b++;
      }
      // console.log(a[index]);
  }
  console.log(notes);

  return (
    <>
      <div className="container">
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>
        <div
          className="mb-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
          >
            
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="5"
            placeholder="Enter your text here"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-info mx-1" onClick={handleDownClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-danger mx-1" onClick={deletetext}>
          Delete Text
        </button>
       {
         toggle ? ( <button className="btn btn-secondary mx-1" onClick={addnote}>
         Add note  </button>):( <button className="btn btn-success mx-1" onClick={addnote}>
          Edit note
        </button>)
       }
      </div>
      <div className="container my-2">
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Your text summary
        </h1>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {text.length} characters and {b} words
        </p>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {0.008 * b} minutes for reading
        </p>
        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {" "}
          Your Notes
          <br></br>
          <div className="container my-2">
          {notes.map((note) => (
            
            
            <li key={note.id} style={{fontSize: 20}}>{note.name} <button className="btn btn-danger btn-sm"  onClick={ ( ) =>Removenote(note.id)}>Remove</button>
            <button className="btn btn-primary mx-2" onClick={()=>Editnote(note.id)}>Edit</button>
            </li>
           
            
            
          ))}
          </div>
          <button className="btn btn-primary btn-sm" onClick={ClearAll} disabled={notes.length<1}>Clear all</button>
        </h2>
        <p id="ss0" style={{ color: props.mode === "dark" ? "white" : "black" }}></p>
      </div>
    </>
  );
}
