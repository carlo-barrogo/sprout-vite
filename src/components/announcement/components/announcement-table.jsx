import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "../../../../scss/table.scss";
import {
  faCircleInfo,
  faBookmark,
  faMobileScreen,
  faMagnifyingGlass,
  faPlay,
  faForwardStep,
  faBackwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { tableData } from "../tableData";
import moment from "moment";

const AnnouncementTable = () => {
  const filterChoices = [
    {
      label: "One",
      value: 1,
    },
    {
      label: "Two",
      value: 2,
    },
    {
      label: "Three",
      value: 3,
    },
  ];
  const filterChoicesItem = [
    {
      label: "10",
      value: 10,
    },
    {
      label: "20",
      value: 20,
    },
    {
      label: "30",
      value: 30,
    },
  ];

  const tableHeaders = [
    {
      title: "TITLE",
      icon: "",
    },
    {
      title: "MESSAGE",
      icon: "",
    },
    {
      title: "SENT BY",
      icon: "",
    },
    {
      title: "SENT THROUGH",
      icon: <FontAwesomeIcon id="circletable" icon={faCircleInfo} />,
    },
    {
      title: "DATE CREATED",
      icon: "",
    },
    {
      title: "START DATE",
      icon: "",
    },
    {
      title: "END DATE",
      icon: "",
    },
  ];

  return (
    <div className="">
      <div className="d-flex justify-content-between mb-2 ">
        <div className="col">
          <ul className="nav nav-pills ">
            <li className="nav-item ">
              <a
                className="nav-link active text-success"
                aria-current="page"
                href="#one"
              >
                <span className="badge bg-success">10</span> All
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link  text-black"
                aria-current="page"
                href="#two"
              >
                <span className="badge bg-warning">10</span> Drafts
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex gap-2 col-sm">
          <select className="form-select  w-20 ">
            <option selected>Filter By</option>
            {filterChoices.map((fc) => (
              <option value={fc.value}>{fc.label}</option>
            ))}
          </select>
          <div className="searchbartable form-outline w-100 d-flex flex-row-reverse ">
            <input
              id="form1"
              className="headerinput form-control"
              placeholder="Search..."
              aria-label="Search"
            />
            <FontAwesomeIcon id="filtersubmit" icon={faMagnifyingGlass} />
          </div>
        </div>
      </div>
      <div className="tab-content">
        <div className="border rounded " id="one">
          <table className="table border table-hover">
            <thead>
              <tr>
                {tableHeaders.map((th) => (
                  <th scope="col " key={th.title}>
                    <div className="d-flex gap-2">
                      <p>{th.title}</p>
                      <i>{th.icon}</i>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((td) => {
                const setDateCreated = moment(
                  td.dateCreated.toISOString().split("T")[0]
                ).format("MM/DD/YYYY");
                const setStartDate = moment(
                  td.startDate.toISOString().split("T")[0]
                ).format("MM/DD/YYYY");
                const setEndDate = moment(
                  td.endDate.toISOString().split("T")[0]
                ).format("MM/DD/YYYY");
                const setTimeCreated = td.dateCreated.toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                });

                return (
                  <tr key={td.id}>
                    <td>{td.title}</td>
                    <td>{td.message}</td>
                    <td>{td.sentBy}</td>
                    <td>
                      <div className="d-flex flex-row gap-2">
                        {td.sentT.map((st) => {
                          if (st.bookmarked === true) {
                            return (
                              <div>
                                <FontAwesomeIcon icon={faBookmark} />
                              </div>
                            );
                          }
                          if (st.mobile === true) {
                            return (
                              <div>
                                <FontAwesomeIcon icon={faMobileScreen} />
                              </div>
                            );
                          }
                        })}
                      </div>
                    </td>
                    <td className="d-flex flex-column justify-content-center">
                      <div>{setDateCreated}</div>
                      <div className="text-secondary">{setTimeCreated}</div>
                    </td>
                    <td>{setStartDate}</td>
                    <td>{setEndDate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="container-fluid">
            <div className="d-flex justify-content-between mb-3">
              <div className="d-flex gap-3 ">
                <small className="sm-18">Items per page</small>
                <div>
                  <select className="form-select form-select-sm">
                    {filterChoicesItem.map((fc) => (
                      <option value={fc.value}>{fc.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pagenumber d-flex justify-content-between  gap-3">
                <div>
                  <p>
                    <FontAwesomeIcon icon={faBackwardStep} />
                  </p>
                </div>
                <div className="rotatedplay">
                  <p>
                    <FontAwesomeIcon icon={faPlay} />
                  </p>
                </div>
                <div className="d-flex gap-2 ">
                  <small>Page</small>
                  <input className="pageinput " disabled value={1}></input>
                  <small> of 1</small>
                </div>
                <div>
                  <p>
                    <FontAwesomeIcon icon={faPlay} />
                  </p>
                </div>
                <div>
                  <p>
                    <FontAwesomeIcon icon={faForwardStep} />
                  </p>
                </div>
                {/* <div>
                  <FontAwesomeIcon icon={faBackwardStep} />
                </div>
                <div>
                  <FontAwesomeIcon icon={faPlay} />
                </div>
                <div className="d-flex justify-content-between">
                  <small>Page </small>
                  <input
                    id="pagesearch"
                    className="form-control-sm"
                    placeholder="Search..."
                    aria-label="Search"
                    value="1"
                  />
                  of 1
                </div>
                <div>
                  <FontAwesomeIcon icon={faPlay} />
                </div>
                <div>
                  <FontAwesomeIcon icon="fa-brands fa-twitter" />
                </div> */}
              </div>
              <small>Showing 1-10 of 1</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementTable;
