import React, { useState } from "react";
import { motion, useCycle } from "framer-motion";


const Path = props => (
    <motion.path
        fill="transparent"
        stroke="#000"
        strokeWidth="4"
        strokeLinecap="round"
        {...props}
    />
)
const MySVG = ({ isOpen }) => {
    const variant = {
        toOpen: {
            strokeDasharray: "30 93",
            strokeDashoffset: "0px"
        },
        toClosed: {
            strokeDasharray: "30 93",
            strokeDashoffset: "-65px"
        }
    }

    return (
        <svg width="39" height="35" viewBox="0 0 39 35" xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M0 30H30L32.4056 28.6254C35.1914 27.0335 36.7566 23.9312 36.3817 20.7447L35.3688 12.1351C34.7799 7.12912 28.8723 4.77312 25 8V8L5.5 27.5"
                variant={{
                    toOpen: {
                        strokeDasharray: "30 93",
                        strokeDashoffset: "0px"
                    },
                    toClosed: {
                        strokeDasharray: "30 93",
                        strokeDashoffset: "-65px"
                    }
                }}
            />

            <path className="line mid " d="M0 18H30" />
            <path className="line bottom" d="M0 6H30L32.3396 7.31425C35.1606 8.89895 36.7493 12.027 36.3648 15.2397L35.3825 23.448C34.7838 28.4504 28.8973 30.8198 25 27.6271V27.6271L5.5 8.45763" />
            <style jsx>{`

      .line {
  fill: none;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  stroke: #000;
  stroke-width: 4;
  stroke-linecap: round;
}
.top {
  stroke-dasharray: 30 93;
  stroke-dashoffset: 0px;
}
.mid {
  stroke-dasharray: 30px 30;
  stroke-dashoffset: 0px;
}
.bottom {
  stroke-dasharray: 30 93;
  stroke-dashoffset: 0px;
}
.open_top {
  stroke-dasharray: 30 93;
  stroke-dashoffset: -65px;
}
.open_mid{
  stroke-dasharray: 0px 30;
  stroke-dashoffset: -16px;
}
.open_bottom {
  stroke-dasharray: 30 93;
  stroke-dashoffset: -65px;
}
      `}</style>
        </svg >

    )
}

function BurgerButton(props) {
    const [isOpen, updateIsOpen] = useCycle(false, true)

    return (
        <div
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
    );
}

export default BurgerButton;
