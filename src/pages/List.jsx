import axios from "axios";
import React, { useEffect, useState } from "react";

const List = () => {
  const [data, setData] = useState([]);
  const baseURL = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <h1>List items</h1>
      <table className="table table-bordered table-striped w-100">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.completed ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default List;
