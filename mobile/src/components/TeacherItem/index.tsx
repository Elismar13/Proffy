import React, { useState } from 'react'
import { Image, Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


import {
  Container,
  Profile,
  Avatar,
  ProfileInfo,
  Name,
  Subject,
  Bio,
  Footer,
  Price,
  ButtonContainer,
  FavoriteButton,
  PriceValue,
  ContactButton,
  ContactButtonText,
} from './styled';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsAppIcon from '../../assets/images/icons/whatsapp.png';

export interface Teacher {
  avatar: string;
  bio: string;
  cost: string;
  id: number;
  name: string;
  subject: string;
  user_id: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem:React.FC<TeacherItemProps> = ({ teacher }) => {
  const [isFavorited, setFavorited] = useState(false);

  function handleLinkToWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }

  async function handleToggleFavorited() {
    const favorites = await AsyncStorage.getItem('favorites');

    let favoritesArray = [];

    if(favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if(isFavorited) {
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === teacher.id;
      });

      favoritesArray.splice(favoriteIndex, 1);

      // console.log(JSON.stringify("Array favorito" + favoritesArray));
      setFavorited(false);

    } else {
      favoritesArray.push(teacher.id);

      setFavorited(true);
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: teacher.avatar }}/>

        <ProfileInfo>
          <Name>{teacher.name}</Name>
          <Subject>{teacher.subject}</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>
        {teacher.bio}
      </Bio>

      <Footer>
        <Price>
          Preço/hora {'   '}
          <PriceValue>R$ {teacher.cost}</PriceValue>
        </Price>

        <ButtonContainer>
          <FavoriteButton onPress={handleToggleFavorited}>
            {isFavorited 
              ? <Image source={heartOutlineIcon} />
              : <Image source={unFavoriteIcon} />
            }
          </FavoriteButton>

          <ContactButton onPress={handleLinkToWhatsApp}>
            <Image source={whatsAppIcon} />
            <ContactButtonText>Entrar em contato</ContactButtonText>
          </ContactButton>
        </ButtonContainer>
      </Footer>
    </Container>
  );
}

export default TeacherItem;