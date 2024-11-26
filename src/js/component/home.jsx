import ReactDOM from "react-dom/client";
import React from "react";
import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = String(Math.floor(count / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((count % 3600) / 60)).padStart(2, "0");
  const seconds = String(count % 60).padStart(2, "0");

  return (
    <main className="h-100 w-100 ">
      <div className="container-fluid text-center ">
        <h1 className="p-4">Contador</h1>
        <div className="d-flex justify-content-center">
          <div className="clock">
            {[...hours].map((digit, index) => (
              <div className="digit" key={`hour-${index}`}>
                {digit}
              </div>
            ))}
            <span className="colon">:</span>
            {[...minutes].map((digit, index) => (
              <div className="digit" key={`minute-${index}`}>
                {digit}
              </div>
            ))}
            <span className="colon">:</span>
            {[...seconds].map((digit, index) => (
              <div className="digit" key={`second-${index}`}>
                {digit}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Timer;