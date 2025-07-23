import Form from "../Form.jsx";
import BookList from "../BookList.jsx";

const Main = ({ setBookName, books, setBookData }) => {
  return (
    <>
      <Form setBookName={setBookName} />
      <BookList books={books} setBookData={setBookData} />
    </>
  );
};

export default Main;
