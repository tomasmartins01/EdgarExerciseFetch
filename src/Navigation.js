import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

const Navigation = ({ selected }) => {
  useLayoutEffect(() => {
    const a = document.querySelector(".selected");
    const b = document.querySelector(".partialline");
    b.style.left = `${a.offsetLeft}px`;
    b.style.width = `${a.offsetWidth}px`;
  });

  return (
    <div>
      <div className="topline"> </div>

      <div className="partialline"> </div>

      <div className="menu">
        <ul>
          <li className="react">
            <Link className={selected === "react" ? "selected" : null} to="/">
              React
            </Link>
          </li>

          <li className="jsx">
            <Link
              className={selected === "jsx" ? "selected" : null}
              to="/jsxcontent"
            >
              JSX / Props
            </Link>
          </li>

          <li className="hooks">
            <Link
              className={selected === "hooks" ? "selected" : null}
              to="/hooks"
            >
              React Hooks{" "}
            </Link>{" "}
          </li>

          <li className="exercise">
            <Link
              className={selected === "exercise" ? "selected" : null}
              to="/exercise"
            >
              Exercise
            </Link>
          </li>

          <li className="exercise2">
            <Link
              className={selected === "exercise2" ? "selected" : null}
              to="/exercise2"
            >
              Exercise 2
            </Link>
          </li>

          <li className="exercise4">
            <Link
              className={selected === "exercise4" ? "selected" : null}
              to="/exercise4"
            >
              Exercise 4
            </Link>
          </li>

          <li className="fetch">
            <Link
              className={selected === "fetch" ? "selected" : null}
              to="/fetch"
            >
              Fetch
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
