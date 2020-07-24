import { useState } from "react";

function HamburgerButton({ handleChange, isOpen }) {
  return (
    <>
      <button onClick={() => handleChange()}>
        <div />
        <div />
        <div />
      </button>
      <style jsx>
        {`
          button {
            position: absolute;
            top: 5%;
            right: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 2rem;
            height: 2rem;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
            z-index: 10;
          }
          button:focus {
            outline: none;
          }

          div {
            width: 2rem;
            height: 0.25rem;
            background: ${isOpen ? "blue" : "navy"};
            border-radius: 10px;
            transition: all 0.3s linear;
            position: relative;
            transform-origin: 1px;
          }
          div:first-child {
            transform: ${isOpen ? "rotate(45deg)" : "rotate(0deg)"};
          }
          div:nth-child(2) {
            opacity: ${isOpen ? "0" : "1"};
            transform: ${isOpen ? "rotate(-20deg)" : "rotate(0deg)"};
          }
          div:nth-child(3) {
            transform: ${isOpen ? "rotate(-45deg)" : "rotate(0deg)"};
          }
        `}
      </style>
    </>
  );
}

export default HamburgerButton;
