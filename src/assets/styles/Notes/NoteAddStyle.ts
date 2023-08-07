import styled from "styled-components";

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
        background-color: #D8315B;
        position: absolute;
        top: 0;
        right: 0;
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
    outline: none;
    font-weight: 600;
    color: #D8317B;
    margin: 20px 0;
border-top-left-radius: 12px;
border-top-right-radius: 12px;
    background: #f6f7fb;
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

/* .background{
     width: 100%;
    background-color: rgba(0, 21, 36, .4);
    position: fixed;    
    left: 0;
    top: 0;
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
    } */
`