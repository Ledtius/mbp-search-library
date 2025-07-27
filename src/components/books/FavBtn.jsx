import { useContext, useState } from "react";
import ContextBooks from "../../context/ContextBooks.js";

const FavBtn = ({ bookDataLocal, idBooks }) => {
  const { favBooks, setFavBooks, books, prove, setProve } =
    useContext(ContextBooks);
  const [btnState, setBtnState] = useState(false);

//   console.log(idBooks + "ss");
console.log(prove);
  return (
      <>
      <button
        onClick={() => {
          console.log(prove);
          setProve("Cambio prove");
       

            // localStorage.setItem(
            //   "favBooks",
            //   JSON.stringify([...favBooks, bookDataLocal])
            // );

            // setFavBooks((c) => {
            //   return [...c, bookDataLocal];
            // });
        }}
      >
        {btnState ? `Quitar de favoritos 🔴` : `Añadir a favoritos ⭐`}
      </button>
    </>
  );
};

export default FavBtn;
