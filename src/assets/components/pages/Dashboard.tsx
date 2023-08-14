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
import Preloader from '../Loader'


// dark mode context 
// import { DarkModeProvider } from '../../../context/DarkModeContext'

interface User {

}

const Dashboard = () => {

    const [user, loading] = useAuthState(auth);
    const [openModal, setOpenModal] = useState(false)
    const [showNoteAddedNotif, setShowNoteAddedNotif] = useState(false);

    const navigate = useNavigate();

    const signUserOut = () => {
        signOut(auth);
    };

    const handleNoteAdded = () => {
        setShowNoteAddedNotif(true);
        
        useEffect(() => {
            setTimeout(() => {
                setShowNoteAddedNotif(false);
            }, 3000);
        }, [])
    }

    // check for user and reroute to login
    useEffect(() => {
        if (!loading && !user) {
            navigate("/login");
        }
        {loading ? <Preloader/> : ''}
    },[user, loading])

   

    const username = user?.displayName?.split(" ")[0];

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

                {openModal && <NoteAdd onClose={() => setOpenModal(false)} onNoteAdded={handleNoteAdded}/>}
                {showNoteAddedNotif && <Notification text='note added successfully'/>}
                <NoteList />
                <button onClick={signUserOut} id='signout'>Sign Out</button>

            </Container>
            {/* </DarkModeProvider> */}
        </DashboardStyled>
    )
}

export default Dashboard