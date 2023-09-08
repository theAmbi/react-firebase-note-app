import styled from "styled-components";
import "../colours/colours.css";

export const SignInBtnStyled = styled.button`
  padding: 20px 32px;
  background: var(--gray);
  color: var(--darkBlue);
  font-weight: 600;
  text-align: left;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 14px;
  outline: none;
  border: 2px solid var(--gray);
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px 0;

  &:hover,
  :focus {
    background-color: var(--white);
  }

  #google {
    font-size: 2.2rem;
  }

  #facebook {
    font-size: 2rem;
    color: #006fc4;
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 0.8rem;
    #google,
    #facebook {
      font-size: 1.1rem;
    }
    /* background-color: yellow !important; */
  }
`;
