import React from "react";
import { Wrapper } from "../../styles/AuthStyle";

export default function SignUp() {
  return (
    <Wrapper>
      <h1>회원가입</h1>

      <form>
        {/* name */}
        <div>
          <label>Name</label>
          <input type="text"></input>
        </div>

        {/* email */}
        <div>
          <label>Email</label>
          <input type="email"></input>
        </div>

        {/* password */}
        <div>
          <label>Password</label>
          <input type="password"></input>
        </div>

        {/* confirm password */}
        <div>
          <label>ConfirmPassword</label>
          <input type="password"></input>
        </div>

        {/* submit button */}
        <button>완료 !</button>
      </form>
    </Wrapper>
  );
}
