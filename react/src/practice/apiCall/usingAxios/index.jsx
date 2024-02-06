import React, { useEffect, useState } from "react";
import axios from "axios";

/*
Problem statement 1 :-  fetch data from -> https://randomuser.me/api -> using axios -> Show data in a string on screen 
Problem statment 2 :- Now show a picture and first and last name of the user 
Problem statment 3 :- Now add a button that will fetch details for the next user and append page=2 to the url and append in the list
*/

const ApiCallUsingAxios = () => {
  const [userData, setUserData] = useState([]);
  const [randomUserData, setRandomeUserData] = useState("");
  const [pageNumber, setPageMumber] = useState(1);
  const apiFetchMetod = async () => {
    return axios
      .get(`https://randomuser.me/api?page=${pageNumber}`)
      .then(({ data }) => {
        return data;
      })
      .catch((err) => console.error(err));
  };

  const getUserInfo = (info) => {
    const {name:{first, last}} = info;
    return `${first} ${last}`
  };

  const fetchNextUserData = async () => {
    const randomData = await apiFetchMetod(pageNumber);
    // setRandomeUserData(JSON.stringify(randomData, null, 2));
    const newUserDataList = [
      ...userData,
      ...randomData.results
    ] // This line will append new user to same list, instead of updating new user to current.
    setUserData(newUserDataList);
    setPageMumber(randomData.info.page + 1)
  }

  useEffect(() => {
    (async () => {
      fetchNextUserData();
    })();
  }, []);
  return (
    <div>
      Fetching Data using AXIOS
      <pre>{randomUserData}</pre>
      {userData.map((user, index) => {
        return (
          <div key={index}>
            <p>{getUserInfo(user)}</p>
            <img src={user.picture.thumbnail} alt="user image" />
          </div>
        );
      })}
      <button onClick={fetchNextUserData}>Fetch Next Random User</button>
    </div>
  );
};

export default ApiCallUsingAxios;
