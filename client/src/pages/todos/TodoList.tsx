import React, { EventHandler } from "react";
import { Wrapper } from "../../styles/TodoStyle";
import TodoDetail from "./TodoDetail";

interface ListType {
  title: string;
  content: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

// title 17글자
// content 68글자

export default function TodoList() {
  const [todos, setTodos] = React.useState([
    // {
    //   title: "",
    //   content: "",
    //   id: "",
    //   createdAt: "",
    //   updatedAt: "",
    // },
    {
      title: "최선을 다해서 숨쉬기",
      content: "습하 습하",
      id: "z3FGrcRL55qDCFnP4KRtn1",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
    {
      title: "잠 짱많이 자기",
      content: "Zzzzz",
      id: "z3FGrcRL55qDCFnP4KRtn",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
  ]);

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("할일 등록!");
  };
  /* Api Connect */

  return (
    <Wrapper>
      <h1>TodoList</h1>

      {/* Todo List */}
      <ol>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <li>{todo.title}</li>
              <button>수정</button>
              <button>삭제</button>
              <p>{todo.content}</p>
            </div>
          );
        })}
      </ol>

      {/* Input Area */}
      <form onSubmit={onSubmit}>
        <div>
          <label>
            title
            <input type="title" placeholder="할 일을 입력 해주세요." />
          </label>
        </div>
        <div className="content-box">
          <label>
            content
            <input type="content" placeholder="상세 내용을 입력해 주세요." />
          </label>
        </div>
        <button>등록 !</button>
      </form>
    </Wrapper>
  );
}
