'use client';
import React, { useState, useEffect } from 'react';

const Loading = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    window.addEventListener('load', () => {
      setTimeout(() => {
        setLoading(false)
      }, 700)
    })
  })
  return (
    <>
      <div className={`flex flex-col gap-[3vh] justify-center fixed bg-[#ffffff] z-50 items-center w-screen h-screen loading-container ${!loading ? 'fade-out' : ''}`}>
        <div className="spinner">
        </div>
        <style jsx>{`
          .loading-container {
            transform:translateY(0%);
            transition: opacity 0.5s ease-out, visibility 0.5s, transform .5s ease-out;
          }
          .fade-out {
            transform:translateY(-100%);
            opacity: 0; /* Fades out smoothly */
            visibility: hidden; /* Hides after fading */
          }
          .spinner {
            border: .23vw solid #d7d7d7;
            border-top: .23vw solid #ff0403;
            border-radius: 50%;
            width: 10vw;
            height: 10vw;
            animation: spin .7s linear infinite;
          }
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Loading;