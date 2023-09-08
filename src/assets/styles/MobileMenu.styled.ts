import styled from "styled-components";
import "./colours/colours.css";

export const MobileMenu = styled.article`
  width: 80%;
  height: fit-content;
  background-color: var(--white);
  padding: 22px 0px;
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  overflow: hidden;
  gap: 20px;
  /* background-color: yellow; */

  a {
    color: var(--grayishBlue) !important;
    font-weight: normal !important;
    text-decoration: none !important;
  }

  .active {
    color: var(--mainRed) !important;
    font-weight: 700;
  }

  #login {
    padding-top: 20px;
    border-top: 1px solid var(--gray);
  }

  .navlink-flex {
    display: flex;
    padding: 16px 0px;
    align-items: center;
    gap: 14px;

    .mobile-nav-icon {
      padding: 10px;
      background-color: var(--gray);
      border-radius: 6px;
      font-size: 18px;
      color: var(--darkBlue);
    }
  }

  @media only screen and (min-width: 1000px) {
    #mobile-menu {
      display: none;
    }
  }
`;
