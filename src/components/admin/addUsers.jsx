import { useRef, useState } from "react";
import "../../styles/addBooks.css"
const AddUsers = () => {
  var fName = useRef();
  var lName = useRef();
  var pNumber = useRef();
  var eml = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    const users = {
        firstName: fName.current.value,
        lastName: lName.current.value,
        phoneNumber: pNumber.current.value,
        email: eml.current.value,
    };
  
    const postDetails = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(users),
    };
    fetch("http://localhost:4000/users/", postDetails)
    alert(`${fName.current.value} add user Details`)
  }
  return (
    <div className="AddUsers">
      <form className="formAddBook" onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>firstName</td>
            <td>
              <input ref={fName} type="text" />
            </td>
          </tr>
          <tr>
            <td>lastName</td>
            <td>
              <input ref={lName} type="text" />
            </td>
          </tr>
          <tr>
            <td>phoneNumber</td>
            <td>
              <input ref={pNumber} type="number" />
            </td>
          </tr>
          <tr>
            <td>Email</td>

            <td>
              <input ref={eml} type="email" />
            </td>
          </tr>

          <button>submit</button>
        </table>
      </form>
    </div>
  );
};

export default AddUsers;
