import styled from "styled-components";
import '../styles/colours/colours.css'

export const NavContainer = styled.div`
width: 1400px;
max-width: 100%;
margin: auto;
display: flex;
align-items: center;
justify-content: space-between;

/* .hamburger{
    display: none;
} */

/* #darkToggle{
    cursor: pointer;
    padding: 4px 6px;
    background: var(--gray);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
} */

.logo img{
    width: 30%;
}

@media only screen and (max-width: 480px){

    max-width: 90%;
    .hamburger{
        display: block !important;
    }

    .logo img{
        width: 50%;
    }

    .mobileHide{
        display: none;
    }

    #user-img img{
        width: 27px !important;
        height: 27px !important;
    }

    /* .navlink{
        display: none;
    } */

    

    .hamburger {
        display: inline !important;
        /* border: 2px solid red !important; */
    }
    

    
}

@media screen and (min-width: 481px) and (max-width: 1000px){
    width: 90%;
}
/* border: 1px solid lightgray; */
`