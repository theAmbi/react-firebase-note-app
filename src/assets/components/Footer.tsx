import React from 'react';
import { FooterStyled } from '../styles/Footer.styled';
import { Container } from '../styles/Container.styled';
import whiteLogo from '../../assets/images/logo_white.svg'
import { Link } from 'react-router-dom';
import { AiOutlineGithub, AiFillBehanceSquare, AiOutlineTwitter, AiTwotoneHeart } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs';
import baseLogo from '/fbase.svg'
// import border from '../../../public/border.svg'


const Footer = () => {
    return (
        <FooterStyled>
            <Container>
                <div className='footer-flex'>
                    <div className="one">
                        <img src={whiteLogo} alt="quiknote-logo" className='footer-logo' />
                        <p>Note down your thoughts today. You never know when that idea comes at home... <span id='italics'>FAST</span>.</p>

                        <div className="powered-by">
                            <p>Powered by</p>
                            <Link to={'https://firebase.google.com/'} target='_blank'>
                                <img src={baseLogo} alt="base-logo" id='base-logo' />
                            </Link>
                        </div>
                    </div>
                    <div className="two">
                        <div className="menu-flex">
                            <div className='menu'>
                                <h6>Quick Links</h6>
                                <div className="links">
                                    <Link to={'/'}>Home</Link>
                                    <Link to={'/docs'}>Docs</Link>
                                    <Link to={'/login'}>Login</Link>
                                </div>
                            </div>

                            <div className='menu bottom-menu'>
                                <h6>View our privacy policy</h6>
                                <div className="links">
                                    <Link to={'/privacy-policy'}>Privacy policy</Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="three">
                        <div className='menu'>
                            <h6>About the creator</h6>
                            <div className="links">
                                {/* <div className="icon-menu-flex"></div> */}
                                <div className='flex-icon'>
                                    <AiOutlineGithub className='icon' id='github' />
                                    <Link to={'https://github.com/theAmbi'} target='_blank'>GitHub</Link>
                                </div>
                                <div className='flex-icon'>
                                    <BsLinkedin className='icon' />
                                    <Link to={'https://www.linkedin.com/in/golden-ekpendu-0b86491a4/'} target='_blank'>LinkedIn</Link>
                                </div>
                                <div className='flex-icon'>
                                    <AiFillBehanceSquare className='icon' />
                                    <Link to={'https://www.behance.net/goldenekpendu/'} target='_blank'>Behance</Link>
                                </div>
                                <div className='flex-icon'>
                                    <AiOutlineTwitter className='icon' />
                                    <Link to={'https://twitter.com/theeAmbi'} target='_blank'>Twitter</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <div className="border" /> */}
                {/* <img src={border} /> */}
                <p className='attribute'>&copy; 2023,<span className='attr-heart'></span>by Golden Ekpendu</p>
            </Container>
        </FooterStyled>
    )
}

export default Footer