// import { useState } from "react";
import Logo from "../../assets/logo";

function Header() {
  // const [isClicked, setIsClicked] = useState("false");

  // const handleClick = () => {
  //   setIsClicked(!isClicked);
  // };

  return (
    <nav>
      <div className="header-container">
        <Logo />

        <div className="menu">
          <a
            className="info"
            href="https://t.me/nuopen"
            target="_blank"
            rel="noopener noreferrer"
          >
            Info Channel
          </a>
          <a className="participants" href="#">
            Participants
          </a>
        </div>

        {/* <button
        className={isClicked ? "hamburger is-active" : "hamburger"}
        onClick={handleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </button> */}
      </div>
    </nav>
  );
}

export default Header;
