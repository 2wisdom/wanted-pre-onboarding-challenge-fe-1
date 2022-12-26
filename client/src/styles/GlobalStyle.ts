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
`;

/* Wrapper style */
export const Wrapper = styled.div`
  max-width: 1200px;
  text-align: center;
  align-items: center;
  margin: 0 auto;
`;

/* Navbar style */
export const Navigaiter = styled.div`
  ul {
    display: flex;
    justify-content: right;
  }
  li {
    list-style: none;
    padding-left: 10px;
  }
`;
