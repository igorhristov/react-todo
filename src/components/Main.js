import React from "react";
import App from "../style.css";
import ToDo from "./ToDo";

function Main() {
  const styles = {
    color: "yellow",
    "background-color": "black",
    fontSize: "24px"
  };

  return (
    <main style={styles} className="App-main text-center my-0 py-0">
      <div className="todo-list">
        <ToDo />
        <ToDo />
        <ToDo />
        <ToDo />
      </div>
    </main>
  );
}
export default Main;
