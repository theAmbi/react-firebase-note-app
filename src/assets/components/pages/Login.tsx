import React, { useEffect, MouseEvent } from 'react'
import { Container } from '../../styles/Container.styled'
import { LoginStyled } from '../../styles/Login.styled'
import { SignInBtnStyled } from '../../styles/SignInBtn/SignInBtn.styled'
import { FcGoogle } from 'react-icons/fc'
import { GrFacebook } from 'react-icons/gr'
import {UserCredential} from 'firebase/auth'
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, FacebookAuthProvider } from 'firebase/auth'
import { auth } from '../../firebase/firebase.config'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useNavigate } from 'react-router-dom'
import Preloader from '../utils/Preloader'


const Login:React.FC = () => {

    const [user, loading] = useAuthState(auth);
    const googleProvider = new GoogleAuthProvider();
    // const fbProvider = new FacebookAuthProvider();
    const navigate = useNavigate();

    const navigateToDashboard = () => {
        <Navigate to={'/dashboard'} replace={true} />
        // console.log('navigation works');
    };

    const handleGoogleSubmit = async () => {
        try {
            const result: UserCredential = await signInWithPopup(auth, googleProvider);
            // console.log(result.user);
            navigateToDashboard();
        } catch (err) {
            console.error("error is" + err);
        }
    }

    // const handleFbSubmit = () => {
    //     signInWithPopup(auth, fbProvider)
    //         .then((response) => {
    //             response.user;
    //             const credential = fbProvider.credentialFromResult(response);
    //             const accessToken = credential.accessToken;
    //             console.log(accessToken);

    //         })
    //         .catch((err) => {
    //             alert(err.message);

    //         })
    //     redirectUser();
    // };


    // console.log(user);

    useEffect(() => {
        if (user) {
            navigate('/dashboard', { replace: true });
        }
    }, [user])





    return (
        <LoginStyled>
            {/* {loading && <Preloader />} */}
            <Container>
                <h2>Welcome.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <div className='btn-wrap'>
                    <SignInBtnStyled color={"#001524"} onClick={handleGoogleSubmit}>
                        <FcGoogle id='google' />
                        Sign in with Google
                    </SignInBtnStyled>
                    <SignInBtnStyled color='#fff' >
                        <GrFacebook id='facebook' />
                        Sign in with Facebook
                    </SignInBtnStyled>
                </div>
            </Container>
        </LoginStyled>
    )
}

export default Login