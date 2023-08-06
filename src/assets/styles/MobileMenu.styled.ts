import styled from 'styled-components';
import './colours/colours.css';


export const MobileMenu = styled.article`
#mobile-menu{
    width: 100%;
    /* position: absolute; */
    width: 70%;
    height: 100vh;
    background-color: var(--grayishBlue);
   

    .mobile-menu-container{
    z-index: 999;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    background-color: yellow !important;
   
    /* justify-self: end; */
   

    a{
    color: var(--grayishBlue) !important;
    font-weight: normal !important;
    display: flex;
    flex-direction: column !important;
    margin: 20px 0;
    }
}
}

@media only screen and (min-width: 1000px){
    #mobile-menu{
        display: none;
    }
}
`