import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
//GraphQl
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { RestLink } from "apollo-link-rest"; // Set `RestLink` with your endpoint
const restLink = new RestLink({ uri: "https://jsonplaceholder.typicode.com/" }); // Setup your client
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink,
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
