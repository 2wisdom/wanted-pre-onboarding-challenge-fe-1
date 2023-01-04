import React from "react";
import { Wrapper } from "../../styles/TodoStyle";

interface ListType {
  title: string;
  content: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

let data: ListType;

// test data (api 연동 후 삭제 예정)
// data = [
//   {
//     title: "hi",
//     content: "hello",
//     id: "z3FGrcRL55qDCFnP4KRtn",
//     createdAt: "2022-07-24T14:15:55.537Z",
//     updatedAt: "2022-07-24T14:15:55.537Z",
//   },
//   {
//     title: "hi",
//     content: "hello",
//     id: "z3FGrcRL55qDCFnP4KRtn",
//     createdAt: "2022-07-24T14:15:55.537Z",
//     updatedAt: "2022-07-24T14:15:55.537Z",
//   },
// ];

export default function TodoList() {
  return (
    <Wrapper>
      <h1>TodoList</h1>

      {/* Todo List */}
      <ol>
        {/* {data.map((item: ListType) => {
          return <li>{item.title}</li>;
        })} */}
        {/* <div>
          <input type="checkbox" name="todo" value="todo" />
          <li>최선을 다해서 숨쉬기</li>
          <button>수정</button>
          <button>삭제</button>
        </div>
        <div>
          <li>잠 짱많이 자기</li>
          <button>수정</button>
          <button>삭제</button>
        </div> */}
      </ol>

      {/* Input Area */}
      <form>
        <input type="text" placeholder="할일을 입력해주세요." />
        <button>등록 !</button>
      </form>
    </Wrapper>
  );
}
