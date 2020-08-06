import React from 'react';

import PageHeader from '../../components/Header';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

import { Main, TeacherContainer, SearchTeachers } from './styled';


const TeacherForm: React.FC = () => {
    return (
        <TeacherContainer>
            <PageHeader title="Estes são os profits disponíveis.">
                <SearchTeachers>
                    <Input name="subject" label="Materia" />
                    <Input name="week_day" label="Dia da Semana"/>
                    <Input type="time" name="time" label="Hora" />
                </SearchTeachers>
            </PageHeader>

            <Main>
                <TeacherItem />
            </Main>
        </TeacherContainer>
    );
}

export default TeacherForm;