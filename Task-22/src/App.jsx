import { useState } from "react";
import useFetch from "./customHook";
import "./App.css";

function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return (
      <div>
        <h1>Some Error Occurred!</h1>
        Error: {error.message}
      </div>
    );
  }

  if (data.length) {
    return (
      <div className="App">
        <h1>Users</h1>
        <hr />
        <div className="container">
          {data.map((user) => (
            <div className="card" key={user.id}>
              <h3>{user.title}</h3>
              <p>{user.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
