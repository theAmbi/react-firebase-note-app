import styled from "styled-components";

export const SignInBtnStyled = styled.button`
padding: 20px 32px;
background: transparent;
color: ${(color)=> color};
font-weight: 600;
text-align: left;
font-size: 1.2rem;
cursor: pointer;
border-radius: 14px;
outline: none;
border: 2px solid lightgray;
display: flex;
align-items: center;
gap: 20px;
margin: 20px 0;


#google{
    font-size: 2.2rem;
}

#facebook{
    font-size: 2rem;
    color: #006fc4;
}


@media only screen and (max-width: 480px) {
    font-size: 0.8rem;
    /* background-color: yellow !important; */
}

`