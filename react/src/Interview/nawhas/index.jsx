import React, { useEffect, useState } from "react";

const CallApi = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    (async () => {
      const URL = "https://jsonplaceholder.typicode.com/posts";
      const response = await fetch(URL);
      const data = await response.json();
      setPost(data);
    })();
  }, []);

  return (
    <div>
      {post.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.title}</h1>
            <span>{item.body}</span>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default CallApi;
