import React from 'react';
import { Container } from '../styles/Container.styled';
import { AuthStyled } from '../styles/Authentication.styled';
import Card from './utils/Card';
import { MdVerifiedUser } from 'react-icons/md';
import features from '../images/features.svg'

const Authentication = () => {
    return (
        <AuthStyled>
            <Container>
                <h2>Key features.</h2>
                <div className='card-wrap'>
                    <div className="cards-container">
                        <Card title='Easy to use' desc="Simplicity meets functionality in our note app. We've designed the user experience to be intuitive and straightforward, allowing you to focus on what matters most: capturing your thoughts" />
                        <Card title='Secure Authentication' desc="Your privacy is paramount to us. That's why we've implemented a robust authentication system to ensure your notes are for your eyes only. With industry-standard security measures, your data remains protected from unauthorized access" />
                        <Card title='Rich Text, Limitless Expression' desc="Our app seamlessly integrates a feature-rich text editor, enabling you to add emphasis, structure, and creativity to your notes. Experience the freedom to express yourself without boundaries" />
                    </div>

                    <div className="image">
                        <img src={features} />
                    </div>
                </div>
            </Container>
        </AuthStyled>
    )
}

export default Authentication