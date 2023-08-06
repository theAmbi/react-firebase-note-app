import styled from "styled-components";

export const PreloaderStyled = styled.div`
width: 100%;
height: 80vh;
background-color: #FFF;
display: flex;
justify-content: center;
align-items: center;
position: fixed;

.spinner{
    width: 60px;
    height: 60px;
    border: 8px solid #FFFAFF;
    border-left-color: #D8315B;
    border-radius: 50%;
    animation: spin 1s infinite;
}

@keyframes spin {
    to{
        transform: rotate(360deg);
    }
}
`