import { useEffect, useState } from "react";

const useStorage = (book) => {
  const [favBooks, setFavBooks] = useState(
    () => JSON.parse(localStorage.getItem("favBooks")) || []
  );

  return { favBooks, setFavBooks };
};

export default useStorage;
