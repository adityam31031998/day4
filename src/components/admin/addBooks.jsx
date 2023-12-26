import { useRef, useState } from "react";
import bg from "../images/bg.png";
import "../../styles/addBooks.css"
const AddBooks = () => {
  let Title = useRef();
  let thumb = useRef();
  let pageCount = useRef();
  let authName = useRef();
  let category = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    let booksDetails = {
      title: Title?.current?.value,
      thumbnailUrl: thumb?.current?.value,
      pageCount: pageCount?.current?.value,
      authors: authName?.current?.value,
      categories: category?.current?.value,
    };
    const postDetails = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booksDetails),
    };
    fetch("http://localhost:4000/books/", postDetails);
  }

  return (
    <div className="AddBooksHome" >
      {/* <img src={bg} alt=""/> */}
      <form className="formAddBook" onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>Title</td>
            <td>
              <input ref={Title} type="text" />
            </td>
          </tr>
          <tr>
            <td>Thumbniles</td>
            <td>
              <input ref={thumb} type="text" />
            </td>
          </tr>
          <tr>
            <td>PageCount</td>
            <td>
              <input ref={pageCount} type="number" />
            </td>
          </tr>
          <tr>
            <td>authorsName</td>

            <td>
              <input ref={authName} type="text" />
            </td>
          </tr>
          <tr>
            <td>Category</td>

            <td>
              <input ref={category} type="text" />
            </td>
          </tr>
          <button>submit</button>
        </table>
      </form>
    </div>
  );
};

export default AddBooks;
