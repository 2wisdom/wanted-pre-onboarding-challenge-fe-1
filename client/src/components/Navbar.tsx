import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigaiter } from "../styles/GlobalStyle";

export default function Navbar() {
  /* Login 상태 */
  const isLogin = !!localStorage.getItem("Token");
  /* useNavigate */
  const navigate = useNavigate();

  /* 로그아웃 */
  const signOut = () => {
    localStorage.removeItem("Token");
    alert("다음에 또 만나요!");
    navigate("/");
  };

  return (
    <Navigaiter>
      <div>
        <Link to="/">
          <h1>Daily Todo</h1>
        </Link>
      </div>
      {isLogin ? (
        <div>
          <Link to="todos">할일</Link>
          <Link to="/" onClick={signOut}>
            로그아웃
          </Link>
        </div>
      ) : (
        <div>
          <Link to="users/create">회원가입</Link>
          <Link to="users/login">로그인</Link>
        </div>
      )}
    </Navigaiter>
  );
}
