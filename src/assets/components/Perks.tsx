import React from 'react'
import { PerksStyled } from '../styles/Perks.styled'
import { Container } from '../styles/Container.styled'
import { HeroButton } from '../styles/HeroButton.styled'

const Perks = () => {
    return (
        <>
            <PerksStyled  >
                <Container>
                    <h2>What makes us different.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <HeroButton color='#001524'>Learn more</HeroButton>
                </Container>

            </PerksStyled>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFAFF" fill-opacity="1" d="M0,160L80,176C160,192,320,224,480,234.7C640,245,800,235,960,218.7C1120,203,1280,181,1360,170.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}

        </>
    )
}

export default Perks