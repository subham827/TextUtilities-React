import React, { useState } from "react";

export default function Forms(props) {
  let ss = document.getElementById("ss0");
  let ss1 = document.getElementById("ss1");
  const handleOnChange = (e) => {
    // console.log("Text changed");

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
    
      
    
    console.log("add note clicked");
    // deletetext();
    
    setNotes([...notes, text]);
    setText('');

    // ss.innerHTML = text;

    deletetext();
    
  };
  const ClearAll = () => {
    console.log("Clear all clicked");
    setText("");
    setNotes([]);
  }
  const Removenote = (index) => {
    console.log("Remove note clicked");
    console.log(index);
  
    const updatedNotes = notes.filter((elem, indexa) => {
      return index !== indexa;
    })
    setNotes(updatedNotes);


  }
  
  
  
  const [text, setText] = useState("");
  
  const [notes, setNotes] = useState([]);
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
        <button className="btn btn-secondary mx-1" onClick={addnote}>
          Add notes
        </button>
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
          {notes.map((note,index) => (
            <li key={index} style={{fontSize: 20}}>{note} <button className="btn btn-danger btn-sm"  onClick={ ( ) =>Removenote(index)}>Remove</button></li>
          
            
          ))}
          </div>
          <button className="btn btn-primary btn-sm" onClick={ClearAll} disabled={notes.length<1}>Clear all</button>
        </h2>
        <p id="ss0" style={{ color: props.mode === "dark" ? "white" : "black" }}></p>
      </div>
    </>
  );
}
