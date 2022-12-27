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
`;
