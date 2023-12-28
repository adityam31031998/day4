import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/adminBook.css";
import { useLocation } from "react-router-dom";
import readMoreIcon from "./images/readMore.png";
import searchIcon from "./images/search.png"
const Books = () => {
  var [books, setBooks] = useState([]);
  const nav = useLocation();
  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch("http://localhost:4000/books");
      let data = await response.json();
      setBooks(data);
    };
    fetchData();
  }, []);
  let readBook = useNavigate();
  function handleClick(id) {
    <>
      {nav.pathname.startsWith("/adminPortal")
        ? readBook(`/adminPortal/books/${id}`)
        : readBook(`/userPortal/books/${id}`)}
    </>;
  }
  function handleDelete(id) {
    console.log("Deleting book with id", id);
    fetch(`http://localhost:4000/books/${id}`, { method: "DELETE" });
  }

  return (
    <div className="Books">
      <div className="">

      <h1>BooksCollection</h1>
      <input className="serachBook" type="text" placeholder="SearchBooks"/>
      <img src={searchIcon} className="searchBookIoncs" alt="" />
      </div>
      <div className="bookCards">
        {books.map((item, index) => (
          <p key={index}>
            <div className="booksCard">
              <img src={item.thumbnailUrl} className="bookImg" alt="" />
              <div className="adminDetailPara">
                <div className="adminPara1">
                  <p>Title:- {item?.title}</p>
                  <p>Autor:- {item?.authors}</p>
                  <p>Category:-{item?.categories}</p>
                  <p>No of pages:-{item?.pageCount}</p>
                </div>
                <div className="readMoreHome">
                  <img src={readMoreIcon} alt="" />
                  <button
                    className="readBookSubmit"
                    onClick={() => handleClick(item.id)}
                  >
                    ReadMore
                  </button>
                </div>
                {nav.pathname.startsWith("/adminPortal") ? (
                  <button
                    className="readBookDelete"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                ) : (
                  ""
                )}
                {/* <button className="readBookDelete"onClick={()=>handleClick(item.id)}>Delete</button> */}
              </div>
            </div>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Books;
