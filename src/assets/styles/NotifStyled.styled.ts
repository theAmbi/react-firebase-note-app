import styled from 'styled-components';
import './colours/colours.css';

export const NotifStyled = styled.div`
padding: 20px 10px;
/* background-color: var(--white); */
background: white;
display: flex;
align-items: center;
border-radius: 7px;
box-shadow: 0px 4px 20px rgba(0,0,0,0.3);
position: absolute;
top: 20;
right: 0;

h5{
    color: var(--darkBlue);
    font-weight: bold;
}
`