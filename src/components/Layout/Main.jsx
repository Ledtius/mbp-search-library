import Form from "../Form.jsx";
import BookList from "../BookList.jsx";

const Main = ({ setBookName, books }) => {
  return (
    <>
      <Form setBookName={setBookName} />
      <BookList books={books} />
    </>
  );
};

export default Main;
