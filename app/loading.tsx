'use client'
import React from 'react'

function Loading() {
  return (
    <>
      <style jsx>{`
        .square-wrap {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: -113px;
          background-color: #000;
          z-index: 9999999999;
        }
        .square {
          position: absolute;
          background-color: #ffffff;
          width: 3px;
          height: 62px;
          margin: 0 3px;
          animation: sliding 3s ease infinite;
        }

        .square:nth-child(1n) {
          animation-delay: 0.3s;
        }
        .square:nth-child(2n) {
          animation-delay: 1s;
        }
        .square:nth-child(3n) {
          animation-delay: 0.7s;
        }
        .square:nth-child(5n) {
          animation-delay: 1.3s;
        }
        .square:nth-child(7n) {
          animation-delay: 1.5s;
        }
        .square:nth-child(11n) {
          animation-delay: 1.7s;
        }
        .square:nth-child(13n) {
          animation-delay: 2s;
        }
        .square:nth-child(17n) {
          animation-delay: 2.3s;
        }
        .square:nth-child(19n) {
          animation-delay: 2.5s;
        }
        .square:nth-child(23n) {
          animation-delay: 2.7s;
        }
        .square:nth-child(29n) {
          animation-delay: 3s;
        }

        @keyframes sliding {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(225px, 0);
          }
        }
      `}</style>
      <div className="square-wrap">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
    </>
  )
}

export default Loading
