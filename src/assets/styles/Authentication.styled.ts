import styled from "styled-components";
import "./colours/colours.css";

export const AuthStyled = styled.section`
  width: 100%;
  min-height: 70vh;
  background: var(--white);
  padding: 140px 0px;
  /* overflow: hidden; */

  h2 {
    color: var(--darkBlue);
    font-size: 3.4rem;
    text-align: left;
    padding-top: 6rem;
    font-weight: 900;
    letter-spacing: -2.2px;
  }

  .card-wrap {
    width: 100%;
    padding-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    /* border: 1px solid purple; */
    /* justify-content: space-between; */
    /* gap: 30px; */
    /* justify-content: space-between; */

    .cards-container {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    #card {
      padding: 22px 35px;
      /* max-width: 50%; */
      /* height: 350px; */
      border-radius: 16px;
      background-color: var(--gray);

      h4 {
        font-size: 1.5rem;
        padding: 15px 0;
      }

      p {
        color: var(--grayishBlue);
        /* max-width: 80%; */
        padding-right: 10px;
        padding-bottom: 22px;
      }

      img {
        width: 30px;
        height: 30px;
        padding-bottom: 16px;
        /* border: 1px solid var(--gray); */
      }
    }

    /* .image {
      display: none;
    } */

    /* #card:hover {
      box-shadow: 3px 4px 0px var(--mainRed);
    } */
  }

  @media (max-width: 480px) {
    padding: 50px 0px;

    h2 {
      font-size: 2.2rem;
    }

    .card-wrap {
      flex-direction: column;
      gap: 30px;

      #card {
        padding: 20px 20px;
        height: fit-content;
        max-width: 86%;

        h4 {
          font-size: 1.4rem;
        }

        p {
          font-size: 0.94rem;
        }
        img {
          width: 34px;
          height: 34px;
          padding-bottom: 15px;
        }
      }

      .image {
        display: none;
      }
    }
  }

  @media (min-width: 481px) and (max-width: 1000px) {
    .card-wrap {
      flex-direction: row !important;
      flex-wrap: wrap;
      gap: 25px;
      padding: 20px 0;

      #card {
        padding: 35px 25px;
        max-width: 80%;

        img {
          width: 32px;
          height: 32px;
          padding-bottom: 19px;
        }
      }

      .image {
        display: none;
      }
    }
  }

  @media (min-width: 1001px) and (max-width: 1200px) {
    .card-wrap {
      #card {
        max-width: 70%;
      }
      .image {
        display: none;
      }
    }
  }
`;
