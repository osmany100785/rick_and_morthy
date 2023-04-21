import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  // console.log("####", onSearch);
  const [id, setId] = useState("");

  function handleChange(event) {
   console.log("input value ", event.target.value);
    setId(event.target.value);
  }
  return (
    <div className="search">
      <input onChange={handleChange} type="search" name="search" value={id} />
      <button onClick={() => onSearch(id)}>Agregar</button>
    </div>
  );
}
