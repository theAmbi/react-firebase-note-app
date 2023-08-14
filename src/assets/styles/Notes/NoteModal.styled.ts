import styled from "styled-components";
import '../colours/colours.css'

export const NoteModalWrap = styled.article`
   width: 50%;
   min-height: 450px;
   margin: 0 auto;
   background-color: var(--white);
   border-radius: 20px;
   padding: 30px 50px;


.top-bar{
    display: flex;
    justify-content: flex-start;
    padding-bottom: 30px;
}

#inputs{
display: flex;
flex-direction: column;
gap: 25px;

    input {
    width: 45%;
    padding: 25px 16px;
    border: 2px solid var(--white);
    outline: none;
    background-color: var(--gray);
    border-radius: 9px;
    font-size: 1.3rem;
    color: var(--mainRed);
    font-weight: bold;

    &::placeholder{
        color: var(--grayishBlue);
    }

    &:focus{
        border-bottom: 2px solid var(--grayishBlue);
        background-color: transparent;
        border-radius: 0px;
    }
}

textarea{
    width: 60%;
    min-height: 250px;
    padding: 32px 16px;
    border: 2px solid var(--white);
    outline: none;
    font-size: 1.1rem;
    color: var(--grayishBlue);
    background-color: var(--gray);
    border-radius: 9px;
    resize: none;

    &:focus{
        border-bottom: 2px solid var(--grayishBlue);
        background-color: transparent;
        border-radius: 0px;
    }
}

#btn button{
    padding: 20px 32px;
    font-weight: 600;
    text-align: left;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 14px;
    position: relative;
    outline: none;
    border: none;
    margin: 5px 10px;
}

#save{
    background-color: var(--darkBlue);
    color: var(--white);

    &:hover{
        background-color: var(--darkBlueHover);
    }
}

#close{
    background-color: var(--gray);
    color: var(--darkBlue);

    &:hover{
        background-color: var(--grayHover);
    }
}
}
`