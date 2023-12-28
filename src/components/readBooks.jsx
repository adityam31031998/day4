import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "../styles/readBooks.css";
const ReadBook = ({ cart, setCart }) => {
  let [book, setBook] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showLess, setShowLess] = useState(false);
  const nav = useLocation();
  let navigate = useNavigate();
  let param = useParams();
  var navs = nav.pathname.startsWith("/adminPortal");
  let book_id = param.id;

  function handleClick() {
    setCart([...cart, book]);
    alert(`${cart}`)
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
    <div className="body1">
      <div class="container">
        <div class="items">
          <div class="photo">
            <img className="bookimage" src={book.thumbnailUrl} alt="" />
          </div>
          <div class="left" id="full">
            <div class="social-icons">{book.title}</div>
            <div class="buttons">
              {navs ? (
                 <button onClick={() => navigate("/adminPortal/books")}>back</button>
              ) : (
                <>
                <button class="contact" onClick={handleClick}>
                  Fav
                </button>
                <button class="download" onClick={() => navigate("/userPortal/books")}>Back</button>
              {/* hosting */}
              {/* temporoael death */}
              {/* snakescase */}
                </>
              )}
            </div>
          </div>
        </div>
        <div class="right">
        {showMore ? <p>{book.longDescription}</p> : <></>}
          {showLess ? <p>{book.shortDescription}</p> : <></>}
          <button class="download" onClick={() => setShowMore(!showMore)}>
            longDescription more
          </button>
          <button class="contact" onClick={() => setShowLess(!showLess) } >
            shortDescription Less
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;

{
  /* <div className="readbook">
      <div className="card">
        <img className="bookimage" src={book.thumbnailUrl} alt="" />
        <div className=" bookDetailsContent">
          <h1></h1>
          {showMore ? <p>{book.longDescription}</p> : <></>}
          {showLess ? <p>{book.shortDescription}</p> : <></>}
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
    </div> */
}
