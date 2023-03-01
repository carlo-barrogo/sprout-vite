import React from "react";
import reactLogo from "../../assets/sprout-logo.jpg";
import "../../../scss/navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCircle } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
    <div
      class="position-absolute start-0 top-0 w-100"
      style={{ background: "#333333" }}
    >
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid d-flex justify-content-between ">
          <div>
            <a class="navbar-brand" href="#" />
            <img src={reactLogo} alt="" width="150" height="50" />
          </div>
          <div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle link-light"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    My Request
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle link-light"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    My Team
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle link-light"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    Company
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle link-light"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    Administration Tools
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle link-light"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    Maintenance
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                  </ul>
                </li>
                <form class="text-center">
                  <input
                    class="searchnav bg-transparent"
                    placeholder="employee search"
                    aria-label="Search"
                  />
                  <button class="btn" type="submit">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      style={{ color: "grey", fontSize: 20 }}
                    />
                  </button>
                </form>
                <li>
                  <button class="btn " type="submit">
                    <FontAwesomeIcon
                      icon={faBell}
                      style={{ color: "grey", fontSize: 20 }}
                    />
                  </button>
                </li>
                <li>
                  <button class="btn" type="submit">
                    <FontAwesomeIcon
                      icon={faCircle}
                      style={{ color: "grey", fontSize: 20 }}
                    />
                  </button>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle text-info link-light"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    Admin
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Dropdown-Item
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
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
