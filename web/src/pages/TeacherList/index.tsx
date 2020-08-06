import React from 'react';

import PageHeader from '../../components/Header';
import TeacherItem from '../../components/TeacherItem';

import { Main, TeacherContainer, SearchTeachers,  InputBlock} from './styled';


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
                <TeacherItem />
            </Main>
        </TeacherContainer>
    );
}

export default TeacherForm;