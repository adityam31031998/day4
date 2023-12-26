import React from "react";
import "../styles/adminBookHome.css";

const Home = () => {
  return (
    <div className="bookMain">
      <div className="bookcontainer">
        <div className="bookCard">
          <img
            className="adminImage"
            src="https://www.greenwichlibrary.org/wp-content/uploads/2021/06/IMG_5534-scaled.jpg"
            alt=""
          />
          <div className="adminPara">
            <h1>Digital Library</h1>
            <p>
              When the Libraries are closed, use our convenient book drops to
              return materials. Visit our Digital Library for 24/7 access to
              eBooks, audiobooks, magazines, movies, music, learning and more.
            </p>
          </div>
        </div>
      </div>
      <div className="bookcontainer">
        <div className="bookCard1">
          <img
            className="adminImage1"
            src="https://www.greenwichlibrary.org/wp-content/uploads/2023/11/Cos-Cob-small.jpg"
            alt=""
          />
          <div className="adminPara9">
            <h1>ABOUT Cos</h1>
            <p>
              Cob Library Renovation Greenwich Library recently announced a new
              plan for the much-anticipated Cos Cob Branch Library renovation.
              The revised plan considers ideas raised by the community to expand
              the community room for greater program capacity, increase space
              dedicated to children’s services, and enhance the collections to
              make it a go-to destination.
            </p>
          </div>
        </div>
      </div>
      <div className="bookcontainer">
        <div className="bookCard2">
          <img
            className="adminImage2"
            src="https://www.greenwichlibrary.org/wp-content/uploads/2021/06/DSC_2461-1024x400.jpg"
            alt=""
          />
          <div className="adminPara2">
            <h1>ABOUT Cos</h1>
            <p>
              Cob Library Renovation Greenwich Library recently announced a new
              plan for the much-anticipated Cos Cob Branch Library renovation.
              The revised plan considers ideas raised by the community to expand
              the community room for greater program capacity, increase space
              dedicated to children’s services, and enhance the collections to
              make it a go-to destination.
            </p>
          </div>
        </div>
      </div>
      <div className="bookcontainer">
        <div className="cardInfo">
          <p className="cardPara">
            Blooming Beginnings (ages 4-6) <br />
            <br />
            Saturday, <br />
            <br />
            January 6 10:00 am
            <br />
            <br /> Join Miss Dina from “Give Yourself Hugs” as we dive into our
            imagination with art, movement, music, drama & mindfulness! Children
            aged 4-6 can join us in the 3rd-floor Constellation Room for this
            45-minute program. This is not a drop-off program and a caregiver is
            required to stay with the child for the duration of the program.
          </p>
        </div>
        <div className="cardInfo">
          <p className="cardPara">
            Friends Book Discussion <br />
            <br />
            Tuesday,
            <br />
            <br /> January 9 1:00 pm (Online)
            <br />
            <br /> Join us this month in reading Shrines of Gaiety by Kate
            Atkinson. Registration required to receive the Zoom link. Learn More
          </p>
        </div>
        <div className="cardInfo">
          <p className="cardPara">
            Hand Crafts Meetup Saturday,
            <br />
            <br /> January 6 9:00 am <br />
            <br />– 4:00 pm <br />
            <br />
            The Cos Cob Library welcomes members of Common Threads who come to
            work on quilting, knitting, and other handcraft projects. All are
            welcome.
          </p>
        </div>
        <div className="cardInfo">
          <p className="cardPara">
            Job Search Accelerator <br />
            <br /> Weekly Starting Tuesday, January 23
            <br />
            <br /> 10:00 am
            <br />
            <br />
            This group is for job seekers looking to make SERIOUS progress in
            their job search. Facilitated by career strategy expert Noelle
            Gross, this weekly meeting is designed to help you receive answers
            to your questions as well as learn about things you hadn’t even
            considered that may be affecting your job search.
          </p>
        </div>

        <div className="bookcontainer2">
          <div className="cardCon">
            <h1>Greenwich Library Staff Picks Best Of 2023</h1>
            <div></div>
            <div className="cardImg">
              <img
                src="https://contentcafe2.btol.com/ContentCafe/Jacket.aspx?&userID=GWH11030&password=CC64392&Value=9780593184042&content=M&Return=1&Type=M"
                alt=""
              />
              <img
                src="https://contentcafe2.btol.com/ContentCafe/Jacket.aspx?&userID=GWH11030&password=CC64392&Value=9780316406208&content=M&Return=1&Type=M"
                alt=""
              />
              <img
                src="https://contentcafe2.btol.com/ContentCafe/Jacket.aspx?&userID=GWH11030&password=CC64392&Value=9781984881694&content=M&Return=1&Type=M"
                alt=""
              />
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <div className="para4">
          Gail Carson Levine A library is infinity under a roof.
        </div>
        <div className="card7">
          <div className="subCard7">
            Sign Up for Our Newsletter
            <br />
            <br />
            Stay up to date with library events, new books, and what's going on
            in our community.
          </div>
          <div className="subCard8">
            Support The Library
            <br />
            <br />
            Donate today and help ensure that the Library continues to evolve to
            meet the needs of our community.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
