import React from 'react'
import { NotifStyled } from '../styles/NotifStyled.styled';

interface NotifProps {
    text: string;
    icon?: React.ReactNode;

}

const Notification: React.FC<NotifProps> = ({text, icon}) => {
  return (
    <NotifStyled>
        <h5>{text}</h5>
    </NotifStyled>
  )
}

export default Notification;