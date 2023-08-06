import styled from "styled-components";

export const NoteAddBtn = styled.button`
width: fit-content;
margin: auto;
padding: 20px 62px;
background: ${({bg}) => bg };
color: ${(color)=> color};
font-weight: 600;
text-align: left;
font-size: 1.2rem;
cursor: pointer;
border-radius: 14px;
outline: none;
border: none;
/* max-width: fit-content; */
/* margin: start; */
margin-top: 40px;


@media screen and (max-width: 480px){
    font-size: 1rem;
}

`