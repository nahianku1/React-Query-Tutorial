import React, { useEffect, useState } from "react";

function ConventionalQuery() {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:400/data`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setError("");
        setData(data);
      })
      .catch((error) => {
        setLoading(false);
        setData([]);
        console.log(error);
        setError(error.message);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  } else if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h1>Users Info:</h1>
      {data.map((user) => (
        <div key={crypto.randomUUID()}>
          {user.name} - {user.username} - {user.email}
        </div>
      ))}
    </div>
  );
}

export default ConventionalQuery;
