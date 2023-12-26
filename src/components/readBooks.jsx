import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/readBooks.css";
const ReadBook = () => {
  let [book, setBook] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [showLess, setShowLess] = useState(false);
  let navigate = useNavigate();
  let param = useParams();
  let book_id = param.id;
  console.log(book_id);
  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch(`http://localhost:4000/books/${book_id}`);
      let data = await response.json();
      setBook(data);
    };

    fetchData();
  }, []);
  return (
    <div className="readbook">
      <div className="card">
        <img className="bookimage" src={book.thumbnailUrl} alt="" />
        <div className=" bookDetailsContent">
          
          <h1>{book.title}</h1>
          {/* <div className="readMoreContent"> */}
            {showMore ? <p>{book.longDescription}</p> : <></>}
            {showLess ? <p>{book.shortDescription}</p> : <></>}
          {/* </div> */}
          <button onClick={() => setShowMore(!showMore)}>longDescription more</button>
          <button onClick={() => setShowLess(!showLess)}>shortDescription Less</button>
        <button onClick={() => navigate("/adminPortal/books")}>back</button>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
