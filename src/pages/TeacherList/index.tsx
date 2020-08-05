import React from 'react';

import PageHeader from '../../components/Header';
import { Main, TeacherContainer, SearchTeachers,  InputBlock, TeacherItem, UserInfo } from './styled';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

const TeacherForm: React.FC = () => {
    return (
        <TeacherContainer>
            <PageHeader title="Estes sao os profits disponíveis.">
                <SearchTeachers>
                    <InputBlock>
                        <label htmlFor="subject">Materia</label>
                        <input type="text" id="subject" />
                    </InputBlock>
                    <InputBlock>
                        <label htmlFor="week_day">Dia da Semana</label>
                        <input type="text" id="week_day" />
                    </InputBlock>
                    <InputBlock>
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </InputBlock>
                </SearchTeachers>
            </PageHeader>

            <Main>
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
            </Main>
        </TeacherContainer>
    );
}

export default TeacherForm;