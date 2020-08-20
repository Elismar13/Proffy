import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { Container } from './styled';
import { ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';

export default function Favorites() {
  const [favorited, setFavorites] = useState<Teacher[]>([]);

  async function loadTeachers() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        console.log(favoritedTeachers)
        setFavorites(favoritedTeachers);
      }
    });
  }

  useFocusEffect(() => {
    loadTeachers();
  });

  return (
    <Container>
      <PageHeader title="Meus Proffys favoritos"/>

      <ScrollView
        style={{
          marginTop: -40,
        }}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorited.map((teacher: Teacher) => <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited={true}
          />)
        }
      </ScrollView>
    </Container>
  )
}
