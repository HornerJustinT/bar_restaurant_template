import { Component } from "react";
import logo from "../../logo.svg";
import "./App.css";
import { SocialIcon } from "react-social-icons";
import { AiOutlinePhone } from "react-icons/ai";
import { IconContext } from "react-icons";

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <div className="First-photo">
          <div className="Header">
            <div className="Header-social-media">
              <SocialIcon url="https://www.facebook.com/Shooters-121490991194526/" />
            </div>
            <div className="Header-logo"><a></a></div>
            <div className="Header-contact">
              <div></div>
              <IconContext.Provider value={{ color: "white", size: "3vw" }}>
                <div className="Float-right">
                  <a href="tel:763-631-7468">
                    <AiOutlinePhone></AiOutlinePhone>
                  </a>
                </div>
              </IconContext.Provider>
              {/* <p className="Float-right White">(763) 631-7468</p> */}
              <a className="Float-right White Phone" href="tel:763-631-7468">
                (763) 631-7468
              </a>
              <p className="Float-right White">5584 MN-95, Princeton</p>
            </div>
          </div>

          {/* add an order online in the top */}
          <div className="Nav-bar">
            <a className="Menu-item" href={process.env.PUBLIC_URL}>
              {" "}
              Home
            </a>
            <a className="Menu-item" href="#About">
              {" "}
              About
            </a>
            <a
              className="Menu-item"
              href="https://drive.google.com/file/d/1WlqQyTgClnVlaVplTBUEyCxUJiWswtgj/view?usp=sharing"
            >
              {" "}
              Menu
            </a>
            <a className="Menu-item" href="tel:763-631-7468">
              {" "}
              Contact
            </a>{" "}
            <button className="Menu-order">Order Online</button>
          </div>
          <div className="Cover">
            <h1>Great food, wonderful service, and fun atmosphere</h1>
            <form action="https://drive.google.com/file/d/1WlqQyTgClnVlaVplTBUEyCxUJiWswtgj/view?usp=sharing">
              <input
                className="Menu-link"
                type="submit"
                value="View Our Menu!"
              />
            </form>
          </div>
        </div>
        <div className="About">
          <div className="About-left">
          <a name="About"></a>
            {" "}
            <h1 id="About-text">Welcome to Shooters Sports Bar</h1>
            <p>
              Shooters is a sports bar located on highway 95, 4 miles west of
              Princeton. Here at Shooters we value our hometown feel and
              delicious food. Please come in and have a drink or try our home
              cooked food. Enjoy!
            </p>
          </div>{" "}
          <div className="About-right">
            <img
              width="100%"
              src="https://cdn.pixabay.com/photo/2016/05/25/10/43/hamburger-1414422_960_720.jpg"
            ></img>
          </div>
        </div>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default HomePage;
