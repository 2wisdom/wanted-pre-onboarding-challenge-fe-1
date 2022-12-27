import styled from "styled-components";

/* wrapper style */
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* div in form style */
  form div {
    margin: 10px 0 10px 0;
    display: grid;
    grid-template-columns: 180px 200px;
  }

  /* text style */
  h1 {
    margin: 0 0 20px 0;
  }

  /* input box style */
  input {
    padding: 1px 5px 1px 5px;
  }

  /* button style */
  button {
    cursor: pointer;
    background-color: #ededed;
    border: 1px solid #a5a1a4;
    border-radius: 3px;
    padding: 4px;
    min-width: 80px;
  }

  button:hover {
    background-color: #a5a1a4;
  }

  button:active {
    background-color: #a5a1a4;
    box-shadow: 0 5px #565656;
    transform: translateY(3px);
  }
`;
