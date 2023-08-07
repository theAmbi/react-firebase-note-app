import styled from "styled-components";
import '../styles/colours/colours.css'

export const DashboardStyled = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: var(--gray);
  padding: 20px 0;
  position: relative;

  #signout {
    padding: 20px 32px;
    background-color: var(--darkBlue);
    color: #fff;
    font-weight: 600;
    text-align: left;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 14px;
    position: relative;
    outline: none;
    /* border: 2px solid lightgray; */
  }
`;
