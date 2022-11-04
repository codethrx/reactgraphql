import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useQuery, gql } from "@apollo/client";

const usersQuery = gql`
  query User {
    users @rest(type: "User", path: "users") {
      id
      username
      email
      company {
        name
      }
    }
  }
`;

function App() {
  const [count, setCount] = useState(0);
  const { data, loading, error } = useQuery(usersQuery);
  console.log(data);
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
