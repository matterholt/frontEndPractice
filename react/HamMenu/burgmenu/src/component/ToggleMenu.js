import React, { useState } from "react";
import { motion, useCycle } from "framer-motion";


const Path = props => (
  <motion.path
    fill="transparent"
    stroke="#000"
    strokeWidth="4"
    strokeLinecap="round"

    transition={{
      type: "spring",
      stiffness: 200,
      damping: 40
    }}
    {...props}
  />
)

const BurgMenu = ({ toggle }) => {

  return (
    <button onClick={() => toggle()} >
      <svg width="39" height="35" viewBox="0 0 39 35" xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M0 30H30L32.4056 28.6254C35.1914 27.0335 36.7566 23.9312 36.3817 20.7447L35.3688 12.1351C34.7799 7.12912 28.8723 4.77312 25 8V8L5.5 27.5"
          variants={{
            toOpen: {
              strokeDasharray: "30 93",
              strokeDashoffset: "0px"
            },
            toClose: {
              strokeDasharray: "30 93",
              strokeDashoffset: "-65px"
            }
          }}
        />
        <Path d="M0 18H30"
          variants={{
            toOpen: {
              strokeDasharray: "30 30",
              strokeDashoffset: "0px",
              opacity: '1'
            },
            toClose: {
              strokeDasharray: "0px 30px",
              strokeDashoffset: "-13px",
              opacity: '0'
            }
          }}
        />
        <Path d="M0 6H30L32.3396 7.31425C35.1606 8.89895 36.7493 12.027 36.3648 15.2397L35.3825 23.448C34.7838 28.4504 28.8973 30.8198 25 27.6271V27.6271L5.5 8.45763"
          variants={{
            toOpen: {
              strokeDasharray: "30 93",
              strokeDashoffset: "0px"
            },
            toClose: {
              strokeDasharray: "30 93",
              strokeDashoffset: "-65px"
            }
          }}
        />
      </svg >
      <style jsx>{`
           button {
            background: none;
            border: none;
            padding: 0;
            height: 130px;
            width: 130px;
            cursor: pointer;
          }
      `}</style>
    </button>
  )
}

function ToggleMenu(props) {
  const [isOpen, updateIsOpen] = useCycle(false, true)

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "toOpen" : "toClose"}
    >
      <motion.div>
        <BurgMenu toggle={() => updateIsOpen()} />
      </motion.div>
    </motion.nav>

  );
}

export default ToggleMenu;

/**
 *
 *     <div
      className="burger__container">
      <button onClick={() => updateIsOpen()}>
        <MySVG
        />
      </button>
      {isOpen ? props.children : null}
      <style jsx>
        {`
          button {
            background: none;
            border: none;
            padding: 0;
            height: 130px;
            width: 130px;
            cursor: pointer;
          }
          .burger__container{
            grid-row: 2;

            align-self:center;
            position: relative;
          }

        `}
      </style>
    </div >
 */