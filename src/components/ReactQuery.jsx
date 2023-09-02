import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

function ReactQuery() {
  let { data, isLoading, isError, error } = useQuery({
    queryKey: ["basic-query"],
    queryFn: () => {
      return axios.get(`http://localhost:4000/data`);
    },
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  if (data) console.log(data);
  return <div>
    <h1>Users Info:</h1>
      {data.data.map((user) => (
        <div key={crypto.randomUUID()}>
          {user.name} - {user.username} - {user.email}
        </div>
      ))}
  </div>;
}

export default ReactQuery;
