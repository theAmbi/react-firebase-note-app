import React, { useEffect, useState } from 'react'
import { NavbarStyle } from '../styles/Navbar.styled'
import { NavContainer } from '../styles/NavContainer.styled'
import { OuterNavContainer } from '../styles/OuterNavContainer.styled'
import { MobileMenu } from '../styles/MobileMenu.styled'
import { Container } from '../styles/Container.styled'
import { Link, NavLink } from 'react-router-dom'
import logo from "../images/logo.png"
import Signin from './Signin'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/firebase.config'
import hamburger from '../images/hambergermenu.svg'
import { AiOutlineHome } from 'react-icons/ai'
import { SlDocs } from 'react-icons/sl'
import { MdOutlineDashboardCustomize } from 'react-icons/md'
// import night from '../images/icons/night.svg';
// import day from '../images/icons/day.svg';

// for context use
// import { useDarkModeContext } from '../../context/DarkModeContext'

interface ImageProps {
    src?: string;
    alt?: string;
}

const Navbar: React.FC<ImageProps> = ({ src, alt }) => {
    const [user, loading] = useAuthState(auth);
    const [toggle, setToggle] = useState(false);
    // const [scrolled, setScrolled] = useState(false)
    const [userOptions, showUserOptions] = useState(false);



    useEffect(() => {
        if (user) {
            showUserOptions(true)
        }
    })


    return (

        <>
            <OuterNavContainer>
                <NavbarStyle>
                    <NavContainer>
                        <Link to="/" className="logo">
                            <img src={logo} alt="notify-logo" />
                        </Link>



                        <ul className={"navlink"}>
                            <NavLink to="/" className={"mobileHide"}><li>Home</li></NavLink>
                            <NavLink to="/docs" className={"mobileHide"}><li>Docs</li></NavLink>
                            <NavLink to="/dashboard" className={"mobileHide"}><li>Dashboard</li></NavLink>
                            <div className='user-btn-hamburger' onClick={() => showUserOptions}>
                                {!user && <NavLink to="/login" className={"mobileHide"}>
                                    <Signin />
                                </NavLink>}

                                {user && <Link to={"/dashboard"}>
                                    <img src={user?.photoURL} alt="user-img" id='user-img' />
                                </Link>}


                                <img src={hamburger} alt="hamburger" className='hamburger' onClick={() => setToggle(!toggle)} />


                            </div>
                        </ul>
                    </NavContainer>
                </NavbarStyle>
                {toggle && <MobileMenu id='mobile-menu'>
                    <Container>
                        {/* <div className='mobile-menu-container'> */}
                        <NavLink to={'/'} className={'navlink-flex'}>
                            <AiOutlineHome className='mobile-nav-icon' />
                            Home
                        </NavLink>
                        <NavLink to={'/docs'} className={'navlink-flex'}>
                            <SlDocs className='mobile-nav-icon' />
                            Docs
                        </NavLink>
                        <NavLink to={'/dashboard'} className={'navlink-flex'}>
                            <MdOutlineDashboardCustomize className='mobile-nav-icon' />
                            Dashboard
                        </NavLink>
                        {!user && <NavLink to="/login" id='login'>
                            <Signin />
                        </NavLink>}
                        {/* </div> */}
                    </Container>
                </MobileMenu>}

            </OuterNavContainer>

        </>

    )
}

export default Navbar;