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
      <ul>
        <li>
          <Link to="users/create">회원가입</Link>
        </li>

        <li>
          <Link to="users/login">로그인</Link>
        </li>
      </ul>
    </Navigaiter>
  );
}
