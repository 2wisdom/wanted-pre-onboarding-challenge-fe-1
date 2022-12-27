import React from "react";
import { Wrapper } from "../../styles/TodoStyle";

export default function TodoList() {
  return (
    <Wrapper>
      <h1>TodoList</h1>
      <ol>
        <div>
          <li>최선을 다해서 숨쉬기</li>
          <button>수정</button>
          <button>삭제</button>
        </div>
        <div>
          <li>잠 짱많이 자기</li>
          <button>수정</button>
          <button>삭제</button>
        </div>
      </ol>
    </Wrapper>
  );
}
