import React from "react";
import { Layout } from "../components/Layout";
import Products from "./Products";
import { Route } from "react-router-dom";
import Details from "./Details";
function Home() {
  return (
    <Layout>
      <Route exact path="/">
        <Products />
      </Route>
      <Route exact path="/product/:id">
        <Details />
      </Route>
    </Layout>
  );
}

export default Home;
