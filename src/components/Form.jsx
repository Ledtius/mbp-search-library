function Form() {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} action="">
        <label htmlFor="input">Nombre del libro </label>
        <input id="input" type="text" />
        <button>Enviar</button>
      </form>
    </>
  );
}

export default Form;
