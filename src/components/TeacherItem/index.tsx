import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';
import { UserInfo, TeacherItem } from './styled';

const TeacherComponent: React.FC = () => {
  return (
    <TeacherItem>
        <header>
            <img />
            <UserInfo>
                <strong>Elismar</strong>
                <span>Química</span>
            </UserInfo>
        </header>

        <p>
            Entusiasta das mellhores tecnologias 
            <br /> <br/>
            Isso ae
        </p>

        <footer>
            <p>
                Preco hora <strong>R$89,00</strong>
            </p>
            <button type="button">
                <img src={whatsAppIcon} alt="Entrar em contato"/>
                Entrar em contato
            </button>
        </footer>
    </TeacherItem>
    );
}

export default TeacherComponent;