import React, { ReactNode } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

import {
  Container,
  TopBar,
  HeaderView,
  GoBackButton,
  Title,
} from './styled';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight, children }) => {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate('Landing');
  }

  return (
    <Container>
      <TopBar>
        <GoBackButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </GoBackButton>
        <Image source={logoImg} resizeMode="contain" />
      </TopBar>

      <HeaderView>
        <Title>
          {title}
        </Title>   
        {headerRight}
      </HeaderView>


      {children}
    </Container>
  );
}

export default PageHeader;