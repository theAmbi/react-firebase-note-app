import React from 'react'
import { HeroStyled } from '../styles/Hero.styled'
import { Container } from '../styles/Container.styled'
import { HeroButton } from '../styles/HeroButton.styled'
import { FlexContainer } from '../styles/FlexContainer.styled'
import bookmark from '../images/bookmark.svg'
import { Link } from 'react-router-dom'
import { BiMessageAdd } from 'react-icons/bi'

const Hero = () => {
    return (
        <HeroStyled className='hero'>
            <Container>
                <FlexContainer>
                    <div>
                        <h2>Take quick notes,<br />write down your thoughts.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <Link to={'/login'}><HeroButton bg={"#001524"} color={"#FFF"}>Get Started
                        </HeroButton>
                        </Link>

                    </div>

                    {/* <div className='box'></div> */}
                    <img src={bookmark} alt="" />
                </FlexContainer>
            </Container>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFF" d="M0,160L80,176C160,192,320,224,480,234.7C640,245,800,235,960,218.7C1120,203,1280,181,1360,170.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        </HeroStyled>
    )
}

export default Hero