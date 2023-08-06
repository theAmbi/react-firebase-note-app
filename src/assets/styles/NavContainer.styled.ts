import styled from "styled-components";
import '../styles/colours/colours.css'

export const NavContainer = styled.div`
width: 1400px;
max-width: 100%;
margin: auto;
display: flex;
align-items: center;
justify-content: space-between;

#darkToggle{
    cursor: pointer;
    padding: 4px 6px;
    background: var(--gray);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media only screen and (max-width: 480px){
    max-width: 90%;
    /* background-color: yellow !important; */

    
}
/* border: 1px solid lightgray; */
`