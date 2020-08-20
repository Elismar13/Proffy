import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Logo,
  HelloText,
  BoldText,
  ButtonsContainer,
  Button,
  ButtonText,
  TotalConnections
} from './styled';

import api from '../../services/api';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
      api.get('connections').then(response => {
          const { total } = response.data;
          setTotalConnections(total);
      })
  }, []);

  const navigation = useNavigation();

  function handleNavigateToGiveClassesPage() {
    navigation.navigate('GiveClasses');
  }

  function handleNavigateToStudyTabsPage() {
    navigation.navigate('StudyTabs');
  }

  return (
    <Container>
      <Logo source={landingImg} />

      <HelloText>
        Seja bem-vindo, {'\n'}
        <BoldText>
          O que deseja fazer?
        </BoldText>
      </HelloText>

      <ButtonsContainer>
        <Button
          onPress={handleNavigateToStudyTabsPage}
          color="#9871f5"
        >
          <Image source={studyIcon} />
          <ButtonText>Estudar</ButtonText>
        </Button>
        <Button
          onPress={handleNavigateToGiveClassesPage}
          color="#01d361"
        >
          <Image source={giveClassesIcon} />
          <ButtonText>Dar aulas</ButtonText>
        </Button>
      </ButtonsContainer>

      <TotalConnections>
        Total de {totalConnections} conexões ja realizadas {' '}
        <Image source={heartIcon} />
      </TotalConnections>
    </Container>
  );
}


export default Landing;
