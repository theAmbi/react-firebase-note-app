import styled from "styled-components";

export const FlexContainer = styled.div`
margin: auto;
width: 100%;
display: flex;
/* flex-direction: column; */
justify-content: space-between ;
align-items: flex-end;

@media screen and (max-width: 480px) {
    flex-direction: column;
    /* justify-content: center !important; */
    /* background-color: yellow; */
    
}




`