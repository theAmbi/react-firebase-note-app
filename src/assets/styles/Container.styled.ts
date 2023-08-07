import styled from "styled-components";

export const Container = styled.div`
width: 1300px;
padding: 0px 10px;
/* max-width: 100%; */
margin: 0 auto;
overflow: hidden;
/* background-color: yellow; */
border: 1px solid red;

@media screen and (max-width: 480px){
    max-width: 90%;
    margin: auto;
    /* background-color: skyblue; */
}
`