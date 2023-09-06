import styled from "styled-components";
import "./colours/colours.css";

export const FooterStyled = styled.footer`
  width: 100%;
  min-height: 50vh;
  background-color: var(--darkBlue);
  margin-top: 30px;

  .border {
    border: 1px solid var(--grayishBlue);
    opacity: 0.3;
    width: 100%;
    margin: 20px 0;
  }

  .attribute {
    color: var(--grayishBlue);
    text-align: center;
    padding-top: 20px;
    padding-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      padding: 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .footer-flex {
    display: flex;
    padding: 50px 0px;
    margin-top: 30px;
    align-items: flex-start;
    justify-content: space-between;
    gap: 100px;
    /* border: 1px solid yellow; */

    .one {
      width: fit-content;
      /* border: 1px solid olive; */

      img {
        width: 100%;
      }

      p {
        margin: 25px 0;
        font-size: 1.1rem;
        color: var(--grayishBlue);
        max-width: 400px;
        line-height: 27px;
      }

      .powered-by {
        padding-top: 20px;
        text-decoration: none;
        p {
          margin-bottom: 5px;
        }

        #base-logo {
          width: 40%;
        }
      }
    }

    .two,
    .three {
      /* width: 100%; */
      display: flex;
      justify-content: space-evenly;
      /* gap: 70px; */
      /* border: 1px solid yellow; */
      .menu {
        h6 {
          color: var(--white);
          /* text-transform: uppercase; */
          /* letter-spacing: 1.4px; */
          font-size: 1.3rem;
          font-weight: 600;
        }

        .flex-icon {
          display: flex;
          align-items: center;
          justify-content: start;
          gap: 25px;
          padding: 15px 0;

          /* &:first-child{
                    padding: 0;
                } */

          a {
            padding: 0 !important;

            &:focus {
              font-weight: 700;
            }
          }

          .icon {
            font-size: 1.5rem;
            color: var(--white);
          }
        }

        /* .icon-menu-flex{
                display: flex;
                flex-direction: column;
                gap: 10px;
            } */

        .links {
          padding: 20px 0;
          display: flex;
          flex-direction: column;
          a {
            color: var(--grayishBlue);
            padding: 8px 0;
            text-decoration: none;
            transition: 0.3s ease;
            font-size: 1.1rem;

            &:hover {
              letter-spacing: 1.4px;
            }

            &:last-child {
              padding-bottom: 0;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    .footer-flex {
      flex-direction: column;

      .one {
        width: 100% !important;

        img {
          width: 70%;
        }

        p {
          font-size: 1rem;
        }

        .powered-by {
          padding-top: 0px;
        }
      }

      .two {
        flex-direction: column;
        gap: 35px;

        .menu {
          h6 {
            font-size: 1.1rem;
          }
          .links {
            a {
              font-size: 1rem !important;
            }
          }
        }
      }
    }

    .attribute {
      /* flex-direction: column; */
      /* justify-content: flex-start; */
      display: block;
      justify-content: start;
      /* align-items: start; */
      p {
        text-align: left;
        font-size: 1rem;
        max-width: 100%;
      }
    }
  }
`;
