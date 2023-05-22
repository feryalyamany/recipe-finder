import React, { useState } from "react";
import styles from "./Root.module.css";
import { Link } from "react-router-dom";
import { BsChevronDoubleDown } from "react-icons/bs";
import { BsChevronDoubleUp } from "react-icons/bs";
import userImg from "../../Images/photo.jpg";

const NavBar = () => {
  const [isClicked, setIsClicked] = useState(true);
  const toggleHandler = () => {
    setIsClicked(!isClicked); 
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white"
       style={{ boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"}}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            Tastebite
          </Link>
          <button
            onClick={toggleHandler}
            className={styles["navbar-toggler"]}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="toggler"
          >
            <span className={styles["navbar-toggler-icon"]}>
              {isClicked ? <BsChevronDoubleDown /> : <BsChevronDoubleUp />}
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item me-4">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item  me-4">
                <Link
                  className="nav-link"
                  to="recipepages"
                >
                  Recipepages
                </Link>
                
              </li>
              <li className="nav-item dropdown me-4">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown2"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                  <li>
                    <a className="dropdown-item" href="#">
                      Page1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      {" "}
                      Page2
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Buy
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
             
              <svg
                aria-hidden="true"
                className=""
                viewBox="0 0 24 24"
                width={21}
                style={{ cursor: "pointer", margin: "0 15px 0 0" }}
              >
                <path d="m21.53 20.47-3.66-3.66A8.98 8.98 0 0 0 20 11a9 9 0 1 0-9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66a.746.746 0 0 0 1.06 0 .747.747 0 0 0 .002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
              </svg>
              <img
                src={userImg}
                alt="user-image"
                className=""
                style={{
                  width: "25px",
                  height: "25px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
