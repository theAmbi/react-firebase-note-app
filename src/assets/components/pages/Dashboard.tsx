import React, { useEffect, useState, useContext } from 'react'
import { DashboardStyled } from '../../styles/Dashboard.styled'
import { Container } from '../../styles/Container.styled'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, database } from '../../firebase/firebase.config'
import { useNavigate } from 'react-router-dom'
import { DashboardBannerStyled } from '../../styles/DashboardBanner.styled'
import { DashboardBtn } from '../../styles/DashboardBtn.styled'
import { signOut } from 'firebase/auth'
import NoteList from '../NoteAdditon/NoteList'
import NoteAdd from '../NoteAdditon/NoteAdd'

// dark mode context 
// import { DarkModeProvider } from '../../../context/DarkModeContext'

const Dashboard = () => {

    const [user] = useAuthState(auth);
    const [openModal, setOpenModal] = useState(false)

    const navigate = useNavigate();
    // console.log(user);
    
    // const newUserName = username.split(" ");
    // const firstName = newUserName[0];


    const signUserOut = () => {
        signOut(auth);
    };

    const toggleModal = () => {
        if (openModal) {
            setOpenModal((prev) => !prev)
        }
        else (
            openModal
        )
    };

    // check for user and reroute to login
    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    })

    const username = user?.displayName.split(" ")[0];

    return (
        <DashboardStyled>
            {/* <DarkModeProvider> */}
            <Container>
                <DashboardBannerStyled>

                    <h2>Welcome, {username}</h2>
                    <p>What's on your mind today?</p>
                    <div>
                        <DashboardBtn onClick={() => setOpenModal((prev) => !prev)}>Create a note</DashboardBtn>
                    </div>
                </DashboardBannerStyled>

                {openModal && <NoteAdd onClose={() => setOpenModal(false)} />}
                <NoteList />
                <button onClick={signUserOut} id='signout'>Sign Out</button>

            </Container>
            {/* </DarkModeProvider> */}
        </DashboardStyled>
    )
}

export default Dashboard