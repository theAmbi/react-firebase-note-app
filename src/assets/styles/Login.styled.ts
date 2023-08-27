import styled from "styled-components";

export const LoginStyled = styled.section`
background-color: white;
width: 100%;
height: 88vh;



h2{
    color: #001524;
    font-size: 3.8rem;
    text-align: left;
    padding-top: 6rem;
    font-weight: 600;
    letter-spacing: -2.2px;
    text-align: center;
    margin-bottom: 20px 0;

}


p{
    padding: 25px 0;
    font-size: 1.1rem;
    color: #577399;
    max-width: 480px;
    line-height: 27px;
    text-align: center;
    margin: auto;

}

.btn-wrap{
    max-width: fit-content;
    margin: 70px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
}

@media only screen and (max-width: 480px) {
    height: fit-content;
    h2{
        font-size: 2.7rem;
        /* margin-top: 100px; */
    }

    p{
        font-size: 1rem;
        max-width: 280px;
    }
}

@media only screen and (min-width: 1000px){
    display: flex;
}

`