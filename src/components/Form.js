import React, { useState } from "react";

export default function Form(props) {
  const delet = (id) => {
    settodo((olditem) => {
      return olditem.filter((elem, index) => {
        return index !== id;
      });
    });
  };

  const Textchange = (event) => {
    setText(event.target.value);
  };

  const summit = () => {
    settodo((olditem) => {
      return [...olditem, Text];
    });
    setText("");
  };

  const [todo, settodo] = useState([]);
  const [Text, setText] = useState();

  return (
    <div>
      <div className="mb-3 container my-3">
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>
        <textarea
          className="form-control shadow-lg p-3 mb-5 bg-body rounded"
          style={{ backgroundColor: props.mode === "dark" ? "grey" : "light" }}
          placeholder="Enter your text"
          value={Text}
          onChange={Textchange}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
        <button className="btn btn-primary" onClick={summit}>
          {props.text}
        </button>

        <ol className="my-5">
          {todo.map((todoval, index) => {
            console.log(index);
            return (
              <>
                <div className="list">
                  <li
                    id={index}
                    style={{ color: props.mode === "dark" ? "white" : "black" }}
                  >
                    <button
                      onClick={() => delet(index)}
                      className="btn btnn btn-primary"
                    >
                      &times;
                    </button>
                    {todoval}
                  </li>
                </div>
              </>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
