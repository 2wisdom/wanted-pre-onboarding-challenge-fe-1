import React from "react";
import "./App.css";
import { GlobalStyle, Wrapper } from "./styles/GlobalStyle";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Wrapper>
          <RouterProvider router={router} />
        </Wrapper>
      </Layout>
    </>
  );
}
