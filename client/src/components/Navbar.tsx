import React from "react";
import { Link } from "react-router-dom";
import { Navigaiter } from "../styles/GlobalStyle";

export default function Navbar() {
  return (
    <Navigaiter>
      <ul>
        <li>
          {/* <Link to="signup"> */}
          회원가입
          {/* </Link> */}
        </li>

        <li>
          {/* <Link to="signin"> */}
          로그인
          {/* </Link> */}
        </li>
      </ul>
    </Navigaiter>
  );
}
