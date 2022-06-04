import { data, prop } from "cheerio/lib/api/attributes";
import React, { Fragment, useState, useEffect } from "react";
import { searchUserAction } from "../actions/userActions";
import "./Following.css";

const Following = (props) => {
  const [followingIsClicked, setFollowingIsClicked] = useState(false);
  const [inputData, setInputData] = useState("");
  const [followArray, setfollowArray] = useState(["Loading..."]);
  const [followEmails, setfollowEmails] = useState(["Loading..."]);

  useEffect(() => {
    setFollowingIsClicked(true);
    let fNames=[];
    let fEmails=[];
    props.followingData.forEach((element,i )=> {
      fNames[i]=element[0];
      fEmails[i]=element[1];
    });
    setfollowArray(fNames);
    setfollowEmails(fEmails);
  }, [props]);

  const FollowListOnClick=async (event)=>{
    // console.log(event.target.getAttribute("value"));
    props.displayDataChanger(event.target.getAttribute("value"));
  }

  
  const onCrossClickHandler = () => {
    setFollowingIsClicked(false);
  };

  const onInputHandler = async (event) => {
    setInputData(event.target.value);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const searchedListuser = await searchUserAction(inputData);
    console.log(searchedListuser);
  };

  return (
    <Fragment>
      <header id={followingIsClicked ? "Header2mob" : "Header2"}>
        <div className="cross mt-3 d-xl-none">
          <a  onClick={onCrossClickHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
              />
              <path
                fillRule="evenodd"
                d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
              />
            </svg>
          </a>
        </div>
        <div className="d-flex flex-column mt-2">
          <div className="following_Title m-xl-2 text-center">
            <h3 className="pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="27"
                fill="currentColor"
                className="bi bi-person-lines-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
              </svg>{" "}
              Following
            </h3>
          </div>
          <div className="input-group search mt-1">
            <div className="form-outline serach_form ms-auto me-auto">
              <input
                type="search"
                placeholder="Search"
                className="form-control"
                onChange={onInputHandler}
              />
            </div>
            <div className="ms-auto me-auto mt-1 search_button">
              <button type="submit" onClick={onSubmitHandler}>
                Search
              </button>
            </div>
          </div>
          <div className="following_names mt-3">
            {followArray.map((data,i) => {
              return (
                <div key={i+1234} className="mb-2 mt-2" >
                  <a value={followEmails[i]} onClick={FollowListOnClick} href="#">
                    <h5 
                    value={followEmails[i]}>
                      {" "}
                      <svg key={i+1}
                      value={followEmails[i]}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-person-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>{" "}
                      {data}
                    </h5>
                  </a>
                </div>
              );
            })}
            {/* <div className="mt-2 mb-2">
              <a href="#">
                <h5>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-person-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>{" "}
                  Ujjwal Raj{" "}
                </h5>
              </a>
            </div> */}
          </div>
        </div>
      </header>
    </Fragment>
  );
};
export default Following;
