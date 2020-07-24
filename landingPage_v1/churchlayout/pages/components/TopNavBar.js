import { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

import HamburgerButton from "./HamburgerButton";

import mediaQueries from "../helpers/mediaQueries";

function LogoContainer() {
  console.log(mediaQueries);
  return (
    <>
      <h1 className="LogoContainer">LOGO</h1>
      <style jsx>{`
        .LogoContainer {
          background-color: cadetblue;
          margin: 0;
          padding: 0;
          width: 150px;
          height: 150px;
          display: grid;
          place-items: center;
        }
        @media (max-width: ${mediaQueries.med}px) {
          .LogoContainer {
            width: 100vw;
            height: 100px;
          }
        }
      `}</style>
    </>
  );
}

function NavItems({ windowSize, isOpen, handleChange }) {
  return (
    <>
      <HamburgerButton
        windowSize={windowSize}
        isOpen={isOpen}
        handleChange={handleChange}
      />
      <ul className="nav_listItems">
        <li>Location</li>
        <li>Hours</li>
        <li>Events</li>
        <li>Connect</li>
        <li>Contact</li>
      </ul>
      <style jsx>{`
        li {
          width: 100px;
          margin: 10px;
          font-weight: 900;
        }
        li:hover {
          color: cadetblue;
        }
        .nav_container {
          position: relative;
          top: 0;
          left: 0;
        }
        .nav_listItems {
          display: flex;
          justify-content: right;
          align-items: center;
          list-style: none;
          flex-grow: 2;
          margin: 0;
          padding: 0;
          font-size: 2rem;
          text-align: center;
          flex-wrap: wrap;
        }
        @media (max-width: ${mediaQueries.med}px) {
          .nav_listItems {
            justify-content: space-evenly;
          }
        }
        @media (max-width: 600px) {
          .nav_listItems {
            align-items: center;
            flex-flow: column;
            position: absolute;
            right: 0;
            top: 0;
            background-color: white;
            height: 100vh;
            width: 100vw;
            transform: ${isOpen ? "translate(0)" : "translate(100%)"};
            transition: transform 0.3s ease-in-out;
          }
        }
      `}</style>
    </>
  );
}

function NavContainer({ windowSize }) {
  const [isOpen, setOpen] = useState(false);

  const handleChange = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <NavItems
        windowSize={windowSize}
        isOpen={isOpen}
        handleChange={handleChange}
      />
    </>
  );
}

export default function TopNavBar() {
  const size = useWindowSize();
  return (
    <nav className="nav_container">
      <LogoContainer />
      <NavContainer windowSize={size} />
      <style global jsx>{`
        .nav_container {
          display: flex;
          flex-wrap: wrap;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </nav>
  );
}
