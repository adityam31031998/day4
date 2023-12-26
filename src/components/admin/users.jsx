import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/adminBook.css";
// import readMoreIcon from "./images/readMore.png";
const Users = () => {
  var [user, setUser] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch("http://localhost:4000/users");
      let data = await response.json();
      setUser(data);
    };
    fetchData();
  }, []);
  let readBook = useNavigate();
  function handleClick(id) {
    readBook(`/adminPortal/users/${id}`);
  }
  function handleDelete(id,name) {
    console.log("Deleting book with id", id);
    fetch(`http://localhost:4000/users/${id}`, { method: "DELETE" })
    alert(`${name} is removed from the server`)
     
  }

  return (
    <div className="Books">
      <h1>BooksCollection</h1>
      <div className="bookCards">
        {user.map((item, index) => (
          <p key={index}>
            <div className="booksCard">
              <img src={item.thumbnailUrl} className="bookImg" alt="" />
              <div className="adminDetailPara">
                <div className="adminPara1">
                  <p>FirstName:- {item?.firstName}</p>
                  <p>LastName:- {item?.lastName}</p>
                  <p>PhoneNumber:-{item?.phoneNumber}</p>
                  <p>Email:-{item?.email}</p>
                </div>
                <button
                  className="readBookDelete"
                  onClick={() => handleDelete(item.id,item.firstName)}
                >
                  Delete
                </button>
                {/* <button className="readBookDelete"onClick={()=>handleClick(item.id)}>Delete</button> */}
              </div>
            </div>
          </p>
        ))}
      </div>
    </div> );
}
 
export default Users;