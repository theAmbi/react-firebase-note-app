import styled from "styled-components";

export const DashboardBannerStyled = styled.div`
width: 100%;
/* max-width: 96%; */
height: 370px;
background-color: #001524;
padding-left: 70px;
display: flex;
flex-direction: column;
margin-top: 30px;
position: relative;
/* border-radius: 16px; */
/* align-items: center; */

h2{
    color: #FFFAFF;
    font-size: 3.8rem;
    text-align: left;
    padding-top: 6rem;
    font-weight: 600;
    letter-spacing: -2.2px;
}

p{
    margin-top: 25px;
    font-size: 1.6rem;
    color: #577399;
    max-width: 480px;
    text-align: left;
    line-height: 27px;
}

@media only screen and (min-width: 320px) and (max-width: 480px){
    padding-left: 20px;
    height: fit-content;
    padding-bottom: 30px;
    width: 100%;

    h2{
        font-size: 2rem;
        padding-top: 4rem;
    }

    p{
        font-size: 1.3rem;
        margin-top: 15px;
    }
}
`