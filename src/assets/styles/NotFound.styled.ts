import styled from "styled-components";

export const NotFoundStyled = styled.section`
width: 100%;
height: 100vh;
max-height: 100vh;
background: #FFF;
display: flex;
align-items: center;
overflow-y: hidden !important;

h2{
    color: #001524;
    font-size: 3.8rem;
    text-align: center;
    /* padding: 6rem; */
    font-weight: 600;
    letter-spacing: -2.2px;
    margin: 20px 0;
}

img{
    width: 30%;
    margin-bottom: 20px;
}

p{
    text-align: center;
    font-size: 1.1rem;
    color: #577399;
    max-width: 480px;
    margin: auto;
    line-height: 27px;
}
`