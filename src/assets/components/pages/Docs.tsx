import React from 'react';
import { StyledDocs } from '../../styles/StyledDocs.styled';
import { Container } from "../../styles/Container.styled";
import loginImg from '../../images/docs/login.png';
import dashboardModal from '../../images/docs/dashboard-create-note.png'
import addNote from '../../images/docs/dashboard-addnote.png'
import notelist from '../../images/docs/dashboard-notelist.png'
import signout from '../../images/docs/dashboard-signout.png'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom';



const Docs = () => {
    return (
        <Container>
            <StyledDocs>
                <h2>QuizNote Docs</h2>
                <div className="content">
                    <p>
                        Welcome to QuikNote Tutorial! This quick tutorial shows you how to easily create, edit and delete your notes.
                    </p>


                    <div className="steps">
                        <div className="step">
                            <h4>i. Sign into your account</h4>
                            <img src={loginImg} alt="quiknote-login-screen" />
                            <p>The first step to create a note is to <Link to={"/login"}>log in</Link> with either a Google or Facebook account. Don't worry, user authentication is thoroughly taken special care of to make sure your details are secure.</p>
                        </div>

                        <div className="step">
                            <h4>ii. Open note modal</h4>
                            <img src={dashboardModal} alt="quiknote-login-screen" />
                            <p>Click on the <span id='emphasis'>Create a note </span>button to open the modal.</p>
                        </div>
                        <div className="step">
                            <h4>iii. Enter a title and write your thoughts!</h4>
                            <img src={addNote} alt="quiknote-login-screen" />
                            <p>Make sure to enter a title and description of your note, else it won't be added. You can now also add some rich text features such as italics, use different heading sizes and more.</p>
                        </div>
                        <div className="step">
                            <h4>iv. Your note has now been added!</h4>
                            <img src={notelist} alt="quiknote-login-screen" />
                            <p>Congrats! Your note has been added to your very own list. To edit a note, click the <AiOutlineEdit id='edit' /> icon and to delete a note, simply use the <AiOutlineDelete id='delete' /> icon. It's that easy! </p>
                        </div>
                        <div className="step">
                            <h4>v. Sign out of your account - quick and easy</h4>
                            <img src={signout} alt="quiknote-login-screen" />
                            <p>Easily sign out by clicking the <span id='emphasis'>Sign out </span>button. </p>
                        </div>
                    </div>
                </div>
            </StyledDocs>
        </Container>
    )
}

export default Docs