import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Navigaiter } from "../styles/GlobalStyle";

export default function Navbar() {
  return (
    <Navigaiter>
      <div>
        <Link to="todos">
          <h1>Todo</h1>
        </Link>
      </div>
      <div>
        <Link to="users/create">회원가입</Link>
        <Link to="users/login">로그인</Link>
      </div>
    </Navigaiter>
  );
}
