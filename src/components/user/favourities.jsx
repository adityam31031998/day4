import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const Favourities = ({ cart, setCart }) => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>
        {console.log(cart.length)}
        <div className="body1">
            { cart.length ? cart.map((data) => (
          <div class="container">
              <div class="items">
                <div class="photo">
                  <img className="bookimage" src={data.thumbnailUrl} alt="" />
                </div>
                <div class="left" id="full">
                  <div class="social-icons">{data.title}</div>
                  <div class="buttons">
                    <button
                      class="download"
                      onClick={() => navigate("/userPortal/books")}
                    >
                      Back
                    </button>
                    <button
                      class="download"
                      onClick={() => navigate("/userPortal/books")}
                    >
                      ReadMore
                    </button>
                    
                  </div>
                </div>
              </div>
            
          </div>
            )) : <h1>You have not saved Book</h1>} 
        </div>
      </h1>
    </div>
  );
};

export default Favourities;
