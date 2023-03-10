import styled from "styled-components";

/* Wrapper style */
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0 0 20px 0;
  }

  ol div {
    display: grid;
    grid-template-columns: 300px 80px 80px;
    column-gap: 10px;
    margin-bottom: 20px;
  }

  ol li {
    text-align: left;
    cursor: pointer;
  }

  ol p {
    text-align: left;
  }

  /* div in form style */
  form div {
    margin: 10px 0 10px 0;
    align-items: center;
    text-align: center;
  }

  form div label {
    display: grid;
    align-items: center;
    grid-template-columns: 100px 200px;
  }

  /* input box style */
  input {
    padding: 8px 5px 8px 5px;
    border: 3px solid transparent;
    border-bottom: 1px solid #000;
  }

  input:focus {
    border: 2px solid #000;
    border-radius: 5px;
  }

  form button {
    margin: 50px 0 0 10px;
  }

  /* button style */
  button {
    padding: 3px 10px 3px 10px;
    background-color: #e8e9ec;
    border: none;
    border-radius: 3px;
  }

  button:hover {
    transition: all 0.5s;
    background-color: #ababab;
  }
`;
