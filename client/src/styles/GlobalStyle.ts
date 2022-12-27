import styled, { createGlobalStyle } from "styled-components";

/* Global style */
export const GlobalStyle = createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Open Sans', sans-serif; 
   }
   #root{
       margin:0 auto;
   }

   /* global button style */
   button {
    text-align: center;
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
    box-shadow: 0 3px #565656;
    transform: translateY(1px);
  }
`;

/* Wrapper style */
export const Wrapper = styled.div`
  max-width: 1200px;
  text-align: center;
  margin: 0 auto;
  margin-top: 50px;
`;

/* Navbar style */
export const Navigaiter = styled.div`
  max-width: 1800px;
  margin: 20px 50px 0 50px;
  ul {
    display: flex;
    justify-content: right;
  }
  li {
    list-style: none;
    padding: 0 10px 0 10px;
  }
`;
