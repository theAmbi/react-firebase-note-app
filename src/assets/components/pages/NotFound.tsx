import React from 'react'
import { NotFoundStyled } from '../../styles/NotFound.styled'
import { Container } from '../../styles/Container.styled'
import { Link } from 'react-router-dom'
import errorPage from '../../images/404.svg'
import { FlexCol } from '../../styles/FlexCol.styled'
import { HeroButton } from '../../styles/HeroButton.styled'


const NotFound = () => {
    return (
        <NotFoundStyled>
            <Container>
                <FlexCol>
                    <img src={errorPage} alt="page not found" />
                    <h2>Page not found.</h2>
                    <p>Seems like you might have clicked a broken link</p>
                    <Link to={"/"}>
                        <HeroButton bg={'#f6f7fb'}>Go back to homepage</HeroButton>
                    </Link >

                </FlexCol>

            </Container>
        </NotFoundStyled>
    )
}

export default NotFound