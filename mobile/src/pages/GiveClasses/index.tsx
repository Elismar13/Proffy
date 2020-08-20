import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  BackgroundImage,
  Title,
  Description,
  OkButton,
  ButtonDescription,
} from './styled';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

export default function GiveClasses() {
  const { goBack } = useNavigation();

  function handleGoBack() {
    goBack();
  }

  return (
    <Container>
      <BackgroundImage
        resizeMode="contain"
        source={giveClassesBgImage}
      >
        <Title>Quer ser um Proffy?</Title>
        <Description>
          Para começar, você precisa se cadrastrar como professor na plataforma
        </Description>
      </BackgroundImage>

      <OkButton onPress={handleGoBack}>
        <ButtonDescription>
          Tudo bem
        </ButtonDescription>
      </OkButton>
    </Container>
  );
}

