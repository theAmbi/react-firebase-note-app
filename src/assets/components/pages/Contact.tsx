import React from 'react'
// import Navbar from '../Navbar'
import { Container } from '../../styles/Container.styled';
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <h2>Contact us</h2>
        </Container>
    )
}

export default Contact