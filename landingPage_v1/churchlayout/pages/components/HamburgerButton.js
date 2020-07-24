import mediaQueries from "../helpers/mediaQueries";

function HamburgerIcons({ handleChange, isOpen }) {
  return (
    <span>
      <button onClick={() => handleChange()}>
        <div />
        <div />
        <div />
      </button>
      <style jsx>
        {`
          button {
            position: absolute;
            top: 6%;
            right: ${isOpen ? "85vw" : "10vw"};
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 3rem;
            height: 3rem;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
            z-index: 10;
            transition: all 0.3s linear;
          }
          button:focus {
            outline: none;
          }

          div {
            width: 3rem;
            height: 0.4rem;
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
    </span>
  );
}
const HamburgerButton = ({ windowSize, isOpen, handleChange }) => {
  if (windowSize.width <= mediaQueries.sm) {
    return (
      <>
        <HamburgerIcons handleChange={handleChange} isOpen={isOpen} />
      </>
    );
  } else {
    return null;
  }
};

export default HamburgerButton;
