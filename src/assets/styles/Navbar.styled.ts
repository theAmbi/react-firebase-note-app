import styled from "styled-components";
import "./colours/colours.css";

export const NavbarStyle = styled.nav`
  width: 100%;
  height: fit-content;
  /* position: fixed; */

  /* z-index: 999; */
  background-color: var(--white);
  padding: 30px 0px;
  overflow: hidden !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: flex-start;

  #close {
    width: 20px;
    color: var(--grayishBlue);
  }

  /* .nav-border{
    border-bottom: 2px solid var(--grayishBlue) !important;
} */

  #user-img {
    width: 40px !important;
    height: 40px;
    border-radius: 50%;
    /* border: 2px solid white; */
  }

  & a {
    /* color: #FFFAFF; */
    color: var(--grayishBlue) !important;

    text-decoration: none !important;

    & :hover {
      color: var(--mainRed);
      /* font-weight: 700; */
    }
  }

  ul {
    text-decoration: none;
    list-style: none;
    display: inline-flex;
    align-items: center;
    gap: 2.8rem;

    li {
      &:hover {
        cursor: pointer;
      }
    }
  }

  .active {
    color: var(--mainRed) !important;
    font-weight: 700;
  }

  .user-btn-hamburger {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .hamburger {
    display: none;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    /* flex-direction: column;
    justify-content: start; */
    align-items: start;
    gap: 10px;
    .mobileHide {
      display: none;
    }

    /* .navlink{
        display: none !important;
        border: 1px solid red;
    } */

    /* .user-btn-hamburger{
        display: flex !important;
    } */
  }

  @media screen and (min-width: 481px) and (max-width: 1000px) {
    .mobileHide {
      display: none;
    }

    .hamburger {
      display: block;
    }
    .navlink {
      /* display: none; */
      /* border: 1px solid yellow; */
    }
  }
`;
