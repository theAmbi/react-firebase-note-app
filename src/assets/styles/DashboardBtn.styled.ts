import styled from "styled-components";

export const DashboardBtn = styled.button`
width: fit-content;
/* margin: auto; */
padding: 20px 32px;
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


@media screen and (min-width: 320px) and (max-width: 480px){
    font-size: 0.85rem;
    padding: 17px 15px;
    margin-top: 17px;
}
`