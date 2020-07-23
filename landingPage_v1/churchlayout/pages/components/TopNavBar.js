import useWindowSize from "../hooks/useWindowSize";

import HamburgerButton from "./HamburgerButton";

function LogoContainer() {
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
        @media (max-width: 768px) {
          .LogoContainer {
            width: 100vw;
            background-color: blue;
          }
        }
      `}</style>
    </>
  );
}

function BurgerMenu() {
  return (
    <>
      <ButtonStyles />
      <ul>
        <li>Location</li>
        <li>Hours</li>
        <li>Events</li>
        <li>Connect</li>
        <li>Contact</li>
      </ul>
    </>
  );
}

function NavItems() {
  return (
    <>
      <ul className="nav_listItems" style={{}}>
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
      `}</style>
    </>
  );
}

export default function TopNavBar() {
  const size = useWindowSize();

  return (
    <nav className="nav_container">
      <HamburgerButton />
      <LogoContainer />
      <NavItems />
      <style global jsx>{`
        .nav_container {
          display: flex;
          flex-wrap: wrap;
          margin: 0;
          padding: 0;
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
        @media (max-width: 768px) {
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
            background-color: gray;
            height: 100vh;
            width: 30vw;
          }
        }
      `}</style>
    </nav>
  );
}
