import styled from 'styled-components';
import './colours/colours.css';


export const MobileMenu = styled.article`
width: 100%;
height: fit-content;
background-color: var(--white);
padding: 40px 20px;
display: flex;
flex-direction: column;
gap: 20px;

a{
    color: var(--grayishBlue) !important;
    font-weight: normal !important;
    text-decoration: none !important;
    }

 #login{
    padding-top: 20px;
    border-top: 1px solid var(--gray);
 }   



@media only screen and (min-width: 1000px){
    #mobile-menu{
        display: none;
    }
}
`