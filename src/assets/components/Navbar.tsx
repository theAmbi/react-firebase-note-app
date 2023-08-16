import React, { useEffect, useState } from 'react'
import { NavbarStyle } from '../styles/Navbar.styled'
import { NavContainer } from '../styles/NavContainer.styled'
import { OuterNavContainer } from '../styles/OuterNavContainer.styled'
import { MobileMenu } from '../styles/MobileMenu.styled'
import { Link, NavLink } from 'react-router-dom'
import logo from "../images/logo.png"
import Signin from './Signin'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/firebase.config'
import hamburger from '../images/hambergermenu.svg'
// import night from '../images/icons/night.svg';
// import day from '../images/icons/day.svg';

// for context use
// import { useDarkModeContext } from '../../context/DarkModeContext'

interface ImageProps {
    src?: string;
    alt?: string;
}

const Navbar: React.FC<ImageProps> = ({src, alt}) => {
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
                            {/* <NavLink to="/notes"><li>Notes</li></NavLink> */}
                            <NavLink to="/docs" className={"mobileHide"}><li>Docs</li></NavLink>
                            <NavLink to="/contact" className={"mobileHide"}><li>Contact</li></NavLink>
                            <div className='user-btn-hamburger' onClick={() => showUserOptions}>
                                {!user && <NavLink to="/login" className={"mobileHide"}>
                                    <Signin />
                                </NavLink>}

                                {user && <Link to={"/dashboard"}>
                                    <img src={user?.photoURL}  alt="user-img" id='user-img' />
                                </Link> }


                                <img src={hamburger} alt="hamburger" className='hamburger' onClick={() => setToggle(!toggle)} />
                                {/* <div id='darkToggle'>{isDarkMode ? <img src={day} alt="night-icon" /> : <img src={night} alt="night-icon" />}</div> */}


                            </div>

                            {/* <NavLink to="/login">
                            <Signin />
                        </NavLink> */}
                        </ul>
                    </NavContainer>
                </NavbarStyle>
                {toggle && <MobileMenu id='mobile-menu'>
                    {/* <div className='mobile-menu-container'> */}
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/docs'}>Docs</NavLink>
                        <NavLink to={'/contact'}>Contact</NavLink>
                        {!user && <NavLink to="/login" id='login'>
                                    <Signin />
                                </NavLink>}
                    {/* </div> */}
                </MobileMenu>}

            </OuterNavContainer>

        </>

    )
}

export default Navbar;