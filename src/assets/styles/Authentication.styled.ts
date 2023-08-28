import styled from "styled-components";
import './colours/colours.css'

export const AuthStyled = styled.section`
width: 100%;
min-height: 70vh;
background: var(--white);
padding-bottom: 30px;

h2{
    color: var(--darkBlue);
    font-size: 3.4rem;
    text-align: left;
    padding-top: 6rem;
    font-weight: 900;
    letter-spacing: -2.2px;
}

.card-wrap{
    padding-top: 50px;
    display: flex;
    /* gap: 30px; */
    justify-content: space-between;

    #card{
    padding: 50px 35px;
    max-width: 300px;
    height: 350px;
    border-radius: 16px;
    background-color: var(--gray);

    h4{
        font-size: 1.8rem;
        padding: 15px 0;
    }

    p{
        color: var(--grayishBlue);
        padding-right: 10px;
    }

    img{
        width: 50px;
        height: 50px;
        padding-bottom: 25px;
        /* border: 1px solid var(--gray); */
    }
}
}

@media (max-width: 480px){
    h2{
        font-size: 2.2rem;
    }

    .card-wrap{
        flex-direction: column;
        gap: 30px;

        #card{
            padding: 39px 20px;
            height: fit-content;

            h4{
                font-size: 1.4rem;
            }

            p{
                font-size: .94rem;
            }
            img{
                width: 34px;
                height: 34px;
                padding-bottom: 15px;
            }
        }
    }
}

@media (min-width:481px) and (max-width: 1000px){
    .card-wrap{
        flex-direction: row !important;
        flex-wrap: wrap;
        gap: 35px;

        #card{
            padding: 42px 25px;

            img {
                width: 38px;
                height: 38px;
                padding-bottom: 19px;
            }
        }
    }
}
`