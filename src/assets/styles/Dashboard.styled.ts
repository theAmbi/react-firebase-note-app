import styled from "styled-components";
import "../styles/colours/colours.css";

export const DashboardStyled = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: var(--gray);
  padding: 20px 0;
  position: relative;

  #signout {
    padding: 20px 32px;
    background-color: var(--darkBlue);
    color: var(--white);
    font-weight: 600;
    text-align: left;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 14px;
    position: relative;
    outline: none;
    border: none;
    /* border: 2px solid lightgray; */
  }

  #word-count {
    font-size: 1rem;
    color: var(--grayishBlue);
    padding: 30px 0px;
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    #signout {
      font-size: 0.9rem;
    }
  }
`;
