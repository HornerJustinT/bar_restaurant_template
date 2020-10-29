import { Component } from "react";
import logo from "../../logo.svg";
import "./App.css";
import { SocialIcon } from "react-social-icons";
import { AiOutlinePhone } from "react-icons/ai";
import { IconContext } from "react-icons";
import menu from "../../shooters_menu.pdf";
import 'reactjs-popup/dist/index.css';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

class HomePage extends Component {
  state = { show: true };
  componentDidMount(){
    console.log(this.state.show)
  }
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    if(this.state.show===true){
      return (
        <div className="App blur">
          <div>
          <Modal className="Modal Modal-main" show={this.state.show} onHide={this.hideModal}>
          <div className="Popup">
          <button onClick={this.hideModal}>X</button>
            <div className="popup-callout text-center">

              <p>Online Ordering Availabe!{" "}</p>
              <p className='Plain-p'>Online ordering is now available for in-store pickup or delivery</p>
  
              <a
                href="Google.com"
                target="_blank"
                className="btn btn-popup btn-large"
                rel="noopener noreferrer"
              >
                Order Online
              </a>
            </div>
          </div>
          </Modal>
          </div>
  
          <div className="Banner">
            <div className="header-callout text-center">
            Delivery Now Available!{" "}
  
              <a
                href="Google.com"
                target="_blank"
                className="btn btn-primary btn-large"
                rel="noopener noreferrer"
              >
                Order Online
              </a>
            </div>
          </div>
          <div className="First-photo">
            <div className="Header">
              <div className="Header-social-media">
                <SocialIcon url="https://www.facebook.com/Shooters-121490991194526/" />
              </div>
              <div className="Header-logo">
                <a></a>
              </div>
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
              <a className="Menu-item" href={menu} download="Shooters Menu">
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
              <form action={menu}>
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
              <a name="About"></a>{" "}
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
          <footer className="footer">
            <p className="White">
              © 2020, Shooters Sport Bar. All rights reserved
            </p>
          </footer>
        </div>
      );
    }
    else{

    return (
      <div className="App">
        <div>
        <Modal className="Modal Modal-main" show={this.state.show} handleClose={this.hideModal}>
        <div className="Popup">
          <div className="header-callout text-center">
            Online Ordering Availabe!{" "}

            <a
              href="Google.com"
              target="_blank"
              className="btn btn-primary btn-large"
              rel="noopener noreferrer"
            >
              Order Online
            </a>
          </div>
        </div>
        </Modal>
        </div>

        <div className="Banner">
          <div className="header-callout text-center">
          Delivery Now Available!{" "}

            <a
              href="Google.com"
              target="_blank"
              className="btn btn-primary btn-large"
              rel="noopener noreferrer"
            >
              Order Online
            </a>
          </div>
        </div>
        <div className="First-photo">
          <div className="Header">
            <div className="Header-social-media">
              <SocialIcon url="https://www.facebook.com/Shooters-121490991194526/" />
            </div>
            <div className="Header-logo">
              <a></a>
            </div>
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
            <a className="Menu-item" href={menu} download="Shooters Menu">
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
            <form action={menu}>
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
            <a name="About"></a>{" "}
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
        <footer className="footer">
          <p className="White">
            © 2020, Shooters Sport Bar. All rights reserved
          </p>
        </footer>
      </div>
    );
  }
}
}

export default HomePage;
