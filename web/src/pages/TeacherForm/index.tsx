import React from 'react';
import PageHeader from '../../components/Header';

import { TeacherFormPage, Main, FieldSet, Legend, InputBlock } from './styled';

const TeacherList: React.FC = () => {
    return (
      <TeacherFormPage>
        <PageHeader 
          title="Que incrível que você quer dar aulas"
          description="O primeiro passo é preencher esse formulário de inscrição"
        />

        <Main>
          <FieldSet>
            <Legend>Seus dados</Legend>
            <InputBlock>
                <label htmlFor="subject">Nome Completo</label>
                <input type="text" id="subject" />
            </InputBlock>

            <InputBlock>
                <label htmlFor="avatar">Avatar</label>
                <input type="text" id="avatar" />
            </InputBlock>

            <InputBlock>
                <label htmlFor="whatsapp">Whatsapp</label>
                <input type="text" id="whatsapp" />
            </InputBlock>
          </FieldSet>
        </Main>
      </TeacherFormPage>
    )
}

export default TeacherList;