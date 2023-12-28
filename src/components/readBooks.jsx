import { useState, useEffect } from "react";
import { useParams, useNavigate ,useLocation} from "react-router-dom";
import "../styles/readBooks.css";
const ReadBook = ({cart,setCart}) => {
  let [book, setBook] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [showLess, setShowLess] = useState(false);
  const nav = useLocation();
  let navigate = useNavigate();
  let param = useParams();
  let book_id = param.id;

function handleClick(){
  setCart([...cart,book])

}

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
          <button onClick={() => setShowMore(!showMore)}>
            longDescription more
          </button>
          <button onClick={() => setShowLess(!showLess)}>
            shortDescription Less
          </button>
          {nav.pathname.startsWith("/adminPortal") ? (
            <button onClick={() => navigate("/adminPortal/books")}>back</button>
          ) : (
            <button onClick={() => navigate("/userPortal/books")}>back</button>
          )}
          {nav.pathname.startsWith("/adminPortal") ? (
            ""
          ) : (
            <button onClick={handleClick}>Fav</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
