import styled from "styled-components";
import '../styles/colours/colours.css'

export const HeroStyled = styled.section`
width: 100%;
min-height: 50vh;
padding-top: 30px;
padding-bottom: 100px;
background-color: var(--white);
position: relative;
padding-bottom: 180px;

h2{
    color: #001524;
    font-size: 3.8rem;
    text-align: left;
    padding-top: 6rem;
    font-weight: 900;
    letter-spacing: -2.2px;
}

p{
    margin: 35px 0;
    font-size: 1.1rem;
    color: #577399;
    max-width: 480px;
    line-height: 27px;
}

svg{
    position: absolute;
    bottom: 50;
    left: 0;

}

.box{
    width: 380px;
    height: 380px;
    background-color: #577399;
    border-radius: 12px;
    /* fill-opacity: .4; */
}

img{
    width: 40%;
}


@media screen and (min-width: 320px) and (max-width: 480px){
    padding-bottom: 50px;
    h2{
        padding-top: 0;
        font-size: 2.7rem;
        text-align: left;
    }

    p{
        font-size: 1rem;
        max-width: 280px;
        text-align: left;
        /* padding: 40px 0; */
        padding: 20px 0;
        /* margin: 0 auto; */
    }

    img{
        display: none;
    }

    svg{
        bottom: auto;
    }
}
`