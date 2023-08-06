import styled from "styled-components";
import './colours/colours.css';

export const NavbarStyle = styled.nav`
width: 100%;
height: fit-content;
/* position: fixed; */

/* z-index: 999; */
background-color: var(--white);
padding: 30px 0px;
overflow: hidden !important;
display: flex;
align-items: center;
justify-content: space-between;
align-self: flex-start;

/* .nav-border{
    border-bottom: 2px solid var(--grayishBlue) !important;
} */



#user-img{
    width: 40px !important;
    height: 40px;
    border-radius: 50%;
    /* border: 2px solid white; */
}



& a{
    /* color: #FFFAFF; */
    color: var(--grayishBlue) !important;

    text-decoration: none !important;

    & :hover{
        color: var(--mainRed);
        /* font-weight: 700; */
    }
}


 ul {
    text-decoration: none;
    list-style: none;
    display: inline-flex;
    align-items: center;
    gap: 2.8rem;

    li {
        &:hover{
        cursor: pointer;
}
}

}

.active{
        color: var(--mainRed) !important;
        font-weight: 700;
}

.user-btn-hamburger{
    display: flex;
    align-items: center;
    gap: 16px;

}

.nav-border{
    background-color: yellow;
}





@media only screen and (max-width: 480px) {
    width: 100%;
    /* flex-direction: column;
    justify-content: start; */
    align-items: start;
    gap: 10px;
    .mobileHide{
        display: none;
    }

    .logo img{
        width: 100px;
    }
}


@media only screen and (min-width: 1000px){
    .hamburger{
        display: none;
    }
}


`