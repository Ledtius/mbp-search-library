import Form from "../common/Form.jsx";
import BookList from "../books/BookList.jsx";
import ContextBooks from "../../context/ContextBooks.js";
import { useContext } from "react";

const Home = () => {
  const { prove, bookName } = useContext(ContextBooks);

  console.log(prove);
  console.log(bookName);
  return (
    <>
      <Form />
      <BookList />
    </>
  );
};
export default Home;
