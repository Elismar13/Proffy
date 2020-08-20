import React, { useState } from 'react'
import { ScrollView } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  SearchForm,
  Label,
  FormTextInput,
  InputGroup,
  InputBlock,
  SubmitButton,
  SubmitButtonText
} from './styled';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import api from '../../services/api';

export default function TeacherList() {
  const [isFilterVisible, setVisible] = useState(false);
  const [subject, setSubject] = useState('');
  const [week_day, setWeekday] = useState('');
  const [time, setTime] = useState('');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [classes, setClasses] = useState([]);

  function handleToggleFilterVisible() {
    setVisible(!isFilterVisible);
  }

  async function loadFilters() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id;
        });
        setFavorites(favoritedTeachersIds);
      }
    });
  }

  async function handleFiltersSubmit() {
    loadFilters();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      },
    });

    console.log(response.data);
    setClasses(response.data);
  }

  return (
    <Container>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={(
          <BorderlessButton onPress={handleToggleFilterVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        )}
      >
        {isFilterVisible && 
        (
          <SearchForm>
            <Label>Materia</Label>
            <FormTextInput
              placeholderTextColor="#c1bccc"
              placeholder="Qual a matéria?"
              onChangeText={(text) => setSubject(text)}
            />

            <InputGroup>
              <InputBlock>
                <Label>Dia da semana</Label>
                <FormTextInput
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual o dia da semana?"
                  onChangeText={(text) => setWeekday(text)}
                />
              </InputBlock>

              <InputBlock>
                <Label>Horário</Label>
                <FormTextInput
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual o Horário?"
                  onChangeText={(text) => setTime(text)}
                />
              </InputBlock>
            </InputGroup>

            <SubmitButton onPress={() => {
              handleFiltersSubmit();
              // handleToggleFilterVisible();
            }}>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
      </PageHeader>

      <ScrollView
        style={{
          marginTop: -40,
        }}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {classes.map((teacher: Teacher) => <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}
          />)
        }
      </ScrollView>
    </Container>
  )
}
