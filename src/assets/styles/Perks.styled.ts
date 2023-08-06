import styled from "styled-components";

export const PerksStyled = styled.section`
width: 100%;
background: #001524;
min-height: 100vh;
padding: 40px 0;
display: flex;
flex-direction: column;
align-items: center;


h2{
    color: #FFFAFF;
    font-size: 3.8rem;
    text-align: left;
    padding-top: 6rem;
    font-weight: 900;
    letter-spacing: -2.2px;
}

p{
    margin: 25px 0;
    font-size: 1.1rem;
    color: #577399;
    max-width: 480px;
    line-height: 27px;
}


@media only screen and (max-width: 480px) {
    h2{
        padding-top: 0;
        font-size: 2.7rem;
        text-align: left;
    }

    p{
        font-size: 1rem;
        max-width: 280px;
        text-align: left;
        padding-top: 40px;
        padding-bottom: 20px;
        margin: auto;
    }
}
`