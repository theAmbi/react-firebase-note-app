import styled from "styled-components";
import '../colours/colours.css'

export const NoteAddStyle = styled.div`
width: 100%;
margin: 60px 0;
background-color: #fff;
border: 1px solid lightgray;
position: relative;

.note-add-wrapper{
    width: 100%;
    height: 100%;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    position: relative;
    /* background-color: yellow; */


    .cancel{
        padding: 10px;
        background-color: var(--darkBlue);
        position: absolute;
        top: 0;
        right: 0;
        border-bottom-left-radius: 30px;
        /* border-top-right-radius: 12px; */
        cursor: pointer;
    }
}

.note-container{
    /* background-color: pink; */
width: 100%;
    height: fit-content;
    /* background-color: yellow; */
    padding: 20px 30px;
    position: relative;
}

.note-title input {
    border: none;
    padding: 12px 10px;
    font-size: 2rem;
    outline: none !important;
    font-weight: 600;
    color: #D8317B;
    margin: 20px 0;
/* border-top-left-radius: 12px;
border-top-right-radius: 12px; */
    background: transparent;
    /* background: yellow; */
    /* opacity: .5; */

    ::placeholder{
        color: gray;
    }

    &:focus{
        background-color: #fff;
    }

}

.note-description textarea{
    /* border: none; */
    color: #577399 !important;
    /* border: 1px solid lightgray;  */
    padding: 12px 10px;
    font-size: 1.3rem;
    /* border-radius: 6px; */
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
    outline: none;
    width: 90%;
    height: 200px;
    border: none;
    background: #f6f7fb;
    resize: none;
    line-height: 27px;
    

    &::placeholder{
        font-style: italic;
        color: lightgray;
    }

    &:focus{
        /* border: 2px solid #577399; */
        background-color: #fff;
    }
}

.ql-editor {
  color: #577399;
  height: 200px;
  font-size: 1.3rem;
}

/* .background{
     width: 100%;
    background-color: rgba(0, 21, 36, .4);
    position: fixed;    
    left: 0;
    top: 0;
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
    } */

    @media only screen and (max-width: 480px){
        width: 100%;
        margin: 30px 0;
        /* border: 1px solid red !important; */
        /* overflow: hidden; */

        .note-add-wrapper{
            width: 90%;
        }

        .note-title input{
            max-width: 90%;
            font-size: 1.2rem;
        }

        .note-container{
            padding: 15px 20px;
        }
    }
`