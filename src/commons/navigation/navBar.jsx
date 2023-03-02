import React from "react";
import reactLogo from "../../assets/sprout-logo.jpg";
// import "../../../scss/navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCircle } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
    <div
      className="position-absolute start-0 top-0 w-100"
      style={{ background: "#333333" }}
    >
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex justify-content-between ">
          <div>
            <a className="navbar-brand" href="#" />
            <img src={reactLogo} alt="" width="150" height="50" />
          </div>
          <div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle link-light"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    My Request
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle link-light"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    My Team
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle link-light"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    Company
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle link-light"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    Administration Tools
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle link-light"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    Maintenance
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                  </ul>
                </li>
                <form className="text-center">
                  <input
                    className="searchnav bg-transparent"
                    placeholder="employee search"
                    aria-label="Search"
                  />
                  <button className="btn" type="submit">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      style={{ color: "grey", fontSize: 20 }}
                    />
                  </button>
                </form>
                <li>
                  <button className="btn " type="submit">
                    <FontAwesomeIcon
                      icon={faBell}
                      style={{ color: "grey", fontSize: 20 }}
                    />
                  </button>
                </li>
                <li>
                  <button className="btn" type="submit">
                    <FontAwesomeIcon
                      icon={faCircle}
                      style={{ color: "grey", fontSize: 20 }}
                    />
                  </button>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-info link-light"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    Admin
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
