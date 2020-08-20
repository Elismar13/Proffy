import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/Header';
import Input from '../../components/Input';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';

import { TeacherFormPage, Main, FieldSet, Legend, ScheduleItem, Footer } from './styled';

import warningIcon from '../../assets/images/icons/warning.svg';
import api from '../../services/api';


const TeacherList: React.FC = () => {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsApp, setWhatsApp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const history = useHistory(); 

    const [scheduleItems, setScheduleItems] = useState([
      { week_day: '0', from: '', to:'', },
    ]);

    function addNewScheduleItem() {
      setScheduleItems([
        ...scheduleItems,
        { week_day: '0', from: '', to:'', }
      ]);
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
      const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
        if(position === index) {
          return { ...scheduleItem, [field]: value };
        }

        return scheduleItem;
      });

      setScheduleItems(updatedScheduleItems);
    }

    function handleCreateClass(e: FormEvent) {
      e.preventDefault();

      api.post('classes',{
        name, 
        avatar,
        whatsapp: whatsApp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems
      }).then(() => {
        alert('Cadrastro realizado com sucesso');

        history.push('/');
      }).catch(() => {
        alert('Falha ao realizar cadrastro');
      });
    }

    return (
      <TeacherFormPage>
        <PageHeader 
          title="Que incrível que você quer dar aulas"
          description="O primeiro passo é preencher esse formulário de inscrição"
        />

        <Main>
          <form onSubmit={handleCreateClass}>
            <FieldSet>
              <Legend>Seus dados</Legend>

              <Input
                name="name"
                label="Nome completo"
                value={name}
                onChange={(e) => { setName(e.target.value) }}
              />
              <Input
                name="avatar"
                label="Avatar" 
                value={avatar}
                onChange={(e) => { setAvatar(e.target.value) }}
              />
              <Input
                name="whatsapp"
                label="WhatsApp"
                value={whatsApp}
                onChange={(e) => { setWhatsApp(e.target.value) }}
              />
              <Textarea
                name="bio"
                label="Biografia"
                value={bio}
                onChange={(e) => { setBio(e.target.value) }}
              />
            </FieldSet>

            <FieldSet>
              <Legend>Sobre a aula</Legend>
              
              <Select 
                name="subject" 
                label="Matéria"
                value={subject}
                onChange={(e) => { setSubject(e.target.value) }}
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
              <Input
                name="cost"
                label="Custo da sua hora por aula"
                value={cost}
                onChange={(e) => { setCost(e.target.value) }}
              />
            </FieldSet>

            <FieldSet>
              <Legend>
                Horários disponíveis
                <button type="button" onClick={() => addNewScheduleItem()} >
                  + Novo horário
                </button>
              </Legend>
                {scheduleItems.map((scheduleItem, index) => {
                  return(
                    <ScheduleItem>
                      <Select 
                        name="date" 
                        label="Dia da semana"
                        value={scheduleItem.week_day}
                        onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                      name="from"
                      label="Das"
                      type="time"
                      value={scheduleItem.from}
                      onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                    />

                    <Input
                      name="to"
                      label="Até"
                      type="time"
                      value={scheduleItem.to}
                      onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                    />
                  </ScheduleItem>
                  )
                })}
            </FieldSet>

            <Footer>
              <p>
                <img src={warningIcon} alt="Aviso Importante"/>
                  Importante! <br /> 
              </p>
              <button type="submit" >
                Salvar cadrastro
              </button>
            </Footer>
          </form>
        </Main>
      </TeacherFormPage>
    )
}

export default TeacherList;