import { useContext, useState } from "react";
import ContextBooks from "../../context/ContextBooks.js";

const FavBtn = ({ bookDataLocal, idBook }) => {
  const { favBooks, setFavBooks, books, setProve } = useContext(ContextBooks);

  const [favState, setFavState] = useState(() => {
    const stateFavBooks = JSON.parse(localStorage.getItem("favBooks")) || [];

    const bookFav = stateFavBooks.find(({ id }) => id === idBook) || {};

    const { favorite } = bookFav;

    console.log(stateFavBooks);
    console.log(bookFav);
    console.log(favorite);

    if (favorite == undefined) return true;
    else return false;
  });

  const stateBookDataLocal = { ...bookDataLocal, favorite: favState };

  return (
    <>
      <button
        onClick={() => {
          if (favState) {
            setFavState(false);

            localStorage.setItem(
              "favBooks",
              JSON.stringify([...favBooks, stateBookDataLocal])
            );

            setFavBooks((c) => {
              return [...c, stateBookDataLocal];
            });
          } else {
            const stateFavBook = JSON.parse(localStorage.getItem("favBooks"));

            const withoutValue = stateFavBook.filter(({ id }) => id !== idBook);

            setFavBooks(withoutValue);
            localStorage.setItem("favBooks", JSON.stringify(withoutValue));
            console.log(withoutValue);

            // const { favorite } = stateFavBooks;
          }
        }}
      >
        {favState ? `Añadir a favoritos ⭐` : `Quitar de favoritos 🔴`}
      </button>
    </>
  );
};

export default FavBtn;
