import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';
import { UserInfo, TeacherItem } from './styled';
import api from '../../services/api';

interface Classe  {
    classe: Teacher;
}

export interface Teacher {
    avatar: string;
    bio: string;
    cost: string;
    id: string;
    name: string;
    subject: string;
    user_id: string;
    whatsapp: string;
}

const TeacherComponent: React.FC<Classe> = ({ classe }) => {
  function createNewConnection(teacher: Teacher) {
      console.log('a')
      api.post('connections', {
        user_id: teacher.id
      });
  }

  return (
    <TeacherItem>
        <header>
            <img src={classe.avatar} alt={classe.name}/>
            <UserInfo>
                <strong>{classe.name}</strong>
                <span>{classe.subject}</span>
            </UserInfo>
        </header>

        <p>
            {classe.bio}
        </p>

        <footer>
            <p>
                Preco hora: <strong>R${classe.cost}</strong>
            </p>
            <a onClick={() => createNewConnection(classe)} href={`https://wa.me/${classe.whatsapp}`}>
                <img src={whatsAppIcon} alt="Entrar em contato"/>
                Entrar em contato
            </a>
        </footer>
    </TeacherItem>
    );
}

export default TeacherComponent;