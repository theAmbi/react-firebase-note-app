import styled from "styled-components";
import './colours/colours.css'

export const PPolicy = styled.div`
width: 100%;
min-height: 100vh;
background: var(--white);

.content{
    margin-top: 40px;
}


h2{
    color: var(--darkBlue);
    font-size: 3.4rem;
    text-align: center;
    /* padding: 6rem; */
    font-weight: 600;
    letter-spacing: -2.2px;
    margin: 20px 0;
}

p{

text-align: center;
font-size: 1rem;
color: #577399;
max-width: 550px;
margin: auto;
line-height: 27px;
}

.flex{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    gap: 30px;
    .card{
        max-width: 300px;
        height: 200px;
        padding: 20px 13px;
        background-color: var(--white);
        border: 2px dashed var(--gray);
        border-radius: 10px;

        &:hover{
            border:2px dashed var(--mainRed);
            box-shadow: 0px 20px 80px var(--gray);
        }

    
h4{
font-size: 1.7rem;
color: var(--darkBlue);
margin-top: 20px;
margin-bottom: 10px;
}

p{

text-align: left;
font-size: 1rem;
color: #577399;
max-width: 550px;
/* margin: auto; */
line-height: 27px;
}
}
}

@media only screen and (max-width: 480px){
    h2{
    font-size: 2.7rem;
    }

    p{
        font-size: 1rem !important;
    }

    .flex{
        .card{
            height: 190px;
            h4{
                font-size: 1.3rem;
            }

            p{
                font-size: .9rem !important;
            }
        }
    }
}

@media only screen and (min-width: 481px) and (max-width: 1000px){
    h2{
        font-size: 2.9rem;
    }

    p{
        max-width: 500px;
    }
}
`