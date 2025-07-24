import Form from "../common/Form.jsx";
import BookList from "../books/BookList.jsx";

const Home = ({ setBookName, books, setBookData }) => {
  return (
    <>
      <Form setBookName={setBookName} />
      <BookList books={books} setBookData={setBookData} />
    </>
  );
};
export default Home;
