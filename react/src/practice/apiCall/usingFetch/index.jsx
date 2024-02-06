import React, { useEffect, useState } from "react";
/*
Problem statement 1 :-  fetch data from -> https://randomuser.me/api -> using fetch -> Show data in a string on screen 
Problem statment 2 :- Now show a picture and first and last name of the user 
Problem statment 3 :- Now add a button that will fetch details for the next user and append page=2 to the url and append in the list
*/
const ApiCallUsingFetch = () => {
  const [fetchJsonData, setFetchJsonData] = useState("");
  const [userData, setUserData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = `https://randomuser.me/api?page=${pageNumber}`;
    const data = await fetch(url);
    const response = await data.json();
    // setFetchJsonData(JSON.stringify(response.results, null, 2));
    const newUserDataList = [
        ...userData,
        ...response.results
    ]
    setUserData(newUserDataList);
    setPageNumber(response.info.page + 1)
  };
  const getUserName = (userInfo) => {
    const {
      name: { first, last },
    } = userInfo;
    return `${first} ${last}`;
  };
  return (
    <div>
      Fetching Api Data using FETCH
      {/* User Image and first name and last name */}
      {userData.map((user, index) => {
        return (
          <div key={index}>
            <p>{getUserName(user)}</p>
            <img src={user.picture.thumbnail} alt="Profile picture" />
          </div>
        );
      })}
      <button onClick={fetchData}>Fetch Next Random User</button>
      <pre>{fetchJsonData}</pre>
    </div>
  );
};

export default ApiCallUsingFetch;
