import React, { FormEvent, useState } from 'react';

import PageHeader from '../../components/Header';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

import { Main, TeacherContainer, SearchTeachers } from './styled';

const TeacherForm: React.FC = () => {
    const [subject, setSubject] = useState('');
    const [week_day, setWeekday] = useState('');
    const [time, setTime] = useState('');
    const [classes, setClasses] = useState([]);

    function searchTeachers(e: FormEvent) {
        e.preventDefault();

        api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        }).then(response => {
            setClasses(response.data);
        })
    }

    return (
        <TeacherContainer>
            <PageHeader title="Estes são os proffys disponíveis.">
                <SearchTeachers onSubmit={searchTeachers}>
                    <Select 
                        name="subject" 
                        label="Matéria"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Ed.Física', label: 'Ed.Física' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'História', label: 'História' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Química', label: 'Química' },
                        ]}
                    />
                    <Select 
                        name="week_day" 
                        label="Dia da semana"
                        value={week_day}
                        onChange={(e) => setWeekday(e.target.value)}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira'},
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />                    
                    <Input
                        type="time"
                        name="time"
                        label="Hora" 
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />

                    <button type="submit">
                        Procurar
                    </button>
                </SearchTeachers>
            </PageHeader>

            <Main>
                {classes.map((classe: Teacher) => {
                    return <TeacherItem key={classe.id} classe={classe} />;
                })}
            </Main>
        </TeacherContainer>
    );
}

export default TeacherForm;