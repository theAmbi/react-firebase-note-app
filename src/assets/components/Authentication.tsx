import React from 'react';
import { Container } from '../styles/Container.styled';
import { AuthStyled } from '../styles/Authentication.styled';
import Card from './utils/Card';
import easy from '../../../public/interface.svg'
import richText from '../../../public/richtext.svg'
import security from '../../../public/security.svg'
import {MdVerifiedUser} from 'react-icons/md';

const Authentication = () => {
    return (
        <AuthStyled>
        <Container>
        <h2>Key features.</h2>
        <div className='card-wrap'>
            <Card img={easy} title='Easy to use' desc="Simplicity meets functionality in our note app. We've designed the user experience to be intuitive and straightforward, allowing you to focus on what matters most: capturing your thoughts"/>
            <Card img={security} title='Secure Authentication' desc="Your privacy is paramount to us. That's why we've implemented a robust authentication system to ensure your notes are for your eyes only. With industry-standard security measures, your data remains protected from unauthorized access"/>
            <Card img={richText} title='Rich Text, Limitless Expression' desc="Our app seamlessly integrates a feature-rich text editor, enabling you to add emphasis, structure, and creativity to your notes. Experience the freedom to express yourself without boundaries"/>
        </div>
        </Container>
        </AuthStyled>
    )
}

export default Authentication