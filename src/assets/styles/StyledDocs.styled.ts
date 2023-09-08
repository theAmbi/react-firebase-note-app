import styled from "styled-components";
import "./colours/colours.css";

export const StyledDocs = styled.div`
  width: 100%;
  min-height: 100vh;
  background: var(--white);

  .content {
    margin-top: 40px;
  }

  a {
    color: var(--mainRed);
  }

  #edit {
    color: var(--grayish);
  }

  #delete {
    color: var(--errorRed);
  }

  #emphasis {
    font-weight: 600;
  }
  h2 {
    color: var(--darkBlue);
    font-size: 3.4rem;
    text-align: center;
    /* padding: 6rem; */
    font-weight: 600;
    letter-spacing: -2.2px;
    margin: 20px 0;
  }

  p {
    text-align: center;
    font-size: 1rem;
    color: #577399;
    max-width: 550px;
    margin: auto;
    line-height: 27px;
  }

  .steps {
    display: flex;
    flex-direction: column;
    gap: 100px;
    margin-bottom: 150px;
  }

  .step {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    align-items: center;

    h4 {
      color: var(--darkBlue);
      font-size: 1.7rem;
      text-align: center;
      font-weight: 600;
      margin-top: 20px;
    }

    p {
      text-align: center;
      font-size: 1rem;
      color: #577399;
      max-width: 550px;
      margin: auto;
      line-height: 27px;
      /* margin-top: 25px; */
    }

    img {
      width: 70%;
      border: 3px dashed var(--gray);
      border-radius: 20px;
    }
  }
  .step:first-child {
    margin-top: 50px;
  }
`;
