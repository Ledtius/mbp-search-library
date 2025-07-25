import { useState } from "react";
import ContextBooks from "../../context/ContextBooks.js";
import { useContext } from "react";

function Form() {
  const { setBookName } = useContext(ContextBooks);

  const [inputValue, setInputValue] = useState("");
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
