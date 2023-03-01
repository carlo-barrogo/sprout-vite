import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../../scss/table.scss";
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
  // const tableData = [
  //   {
  //     title: "this is a very long title for the row row row row row ",
  //     message: "sample message",
  //     sentBy: "sample sentBy",
  //     sentT: [{
  //       bookmarked: true
  //     },
  //     {mobile:true}

  //   ],
  //     dateCreated: today,
  //     startDate: today,
  //     endDate: today,
  //   },
  //   {
  //     title: "sample title",
  //     message: "sample message",
  //     sentBy: "sample sentBy",
  //     sentT: [{
  //       bookmarked: true
  //     },
  //     {mobile:false}

  //   ],
  //     dateCreated: today,
  //     startDate: today,
  //     endDate: today,
  //   },
  // ]
  return (
    <div class="">
      <div class="d-flex justify-content-between mb-2 ">
        <div class="col">
          <ul class="nav nav-pills ">
            <li class="nav-item ">
              <a
                class="nav-link active text-success"
                aria-current="page"
                href="#one"
              >
                <span class="badge bg-success">4</span> All
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link  text-success" aria-current="page" href="#two">
                <span class="badge bg-warning">4</span> Drafts
              </a>
            </li>
          </ul>
        </div>
        <div class="d-flex gap-2 col-sm">
          <select class="form-select  w-20 ">
            <option selected>Filter By</option>
            {filterChoices.map((fc) => (
              <option value={fc.value}>{fc.label}</option>
            ))}
          </select>
          <div class="searchbartable form-outline w-100 d-flex flex-row-reverse ">
            <input
              type="search"
              id="form1"
              class="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
            <FontAwesomeIcon id="filtersubmit" icon={faMagnifyingGlass} />
          </div>
        </div>
      </div>
      <div class="tab-content">
        <div class="border rounded " id="one">
          <table class="table border table-hover">
            <thead>
              <tr>
                {tableHeaders.map((th) => (
                  <th scope="col ">
                    <div class="d-flex gap-2">
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
                  <tr>
                    <td>{td.title}</td>
                    <td>{td.message}</td>
                    <td>{td.sentBy}</td>
                    <td>
                      <div class="d-flex flex-row gap-2">
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
                    <td class="d-flex flex-column justify-content-center">
                      <div>{setDateCreated}</div>
                      <div class="text-secondary">{setTimeCreated}</div>
                    </td>
                    <td>{setStartDate}</td>
                    <td>{setEndDate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div class="container">
            <div class="d-flex justify-content-between mb-3">
              <div class="d-flex gap-3 ">
                <small class="sm-18">Items per page</small>
                <div>
                  <select class="form-select form-select-sm">
                    {filterChoicesItem.map((fc) => (
                      <option value={fc.value}>{fc.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div class="d-flex justify-content-between">
                {/* <div>
                  <FontAwesomeIcon icon={faBackwardStep} />
                </div>
                <div>
                  <FontAwesomeIcon icon={faPlay} />
                </div>
                <div class="d-flex justify-content-between">
                  <small>Page </small>
                  <input
                    id="pagesearch"
                    class="form-control-sm"
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
