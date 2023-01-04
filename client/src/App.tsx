import React from "react";
import "./App.css";
import { GlobalStyle, Wrapper } from "./styles/GlobalStyle";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import Layout from "./components/Layout";
import TodoList from "./pages/todos/TodoList";
import AppRouter from "./components/AppRouter";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Wrapper>
          <AppRouter />
        </Wrapper>
      </Layout>
    </>
  );
}
