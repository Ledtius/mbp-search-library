import { useEffect, useState } from "react";

function Form({ setBookName }) {
  const [inputValue, setInputValue] = useState("");

  useEffect(()=>{
    console.log("Hey!");
  },[])

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} action="">
        <label htmlFor="input">Nombre del libro </label>
        <input
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          id="input"
          type="text"
          value={inputValue}
        />
        <button
          onClick={() => {
            setBookName(inputValue.trim());
          }}
        >
          Enviar
        </button>
      </form>
    </>
  );
}

export default Form;
