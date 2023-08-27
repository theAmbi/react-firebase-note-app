import styled from "styled-components";
import './colours/colours.css'

export const NotFoundStyled = styled.section`
width: 100%;
height: 100vh;
background: #FFF;
display: flex;
align-items: center;
overflow: hidden;
/* border: 1px solid yellow; */

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
    /* border: 1px solid red; */
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