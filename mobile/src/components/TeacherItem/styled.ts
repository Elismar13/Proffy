import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: #fff;
  border: 1px solid #e6e6f0;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: #eee;
`;

export const ProfileInfo = styled.View`
  margin-left: 16px;
`;

export const Name = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #32264d;
  font-size: 20px;
`;

export const Subject = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #6a6180;
  font-size: 12px;
  margin-top: 4px;
`;

export const Bio = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #6a6180;
  font-size: 14px;
  line-height: 24px;
  margin: 24px;
`;

export const Footer = styled.View`
  margin-top: 24px;
  background-color: #fafafc;
  padding: 24px;
  align-items: center;
`;

export const Price = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #646100;
  font-size: 14px;
`;

export const PriceValue = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #8257e5;
  font-size: 16px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;

`;

export const FavoriteButton = styled(BorderlessButton)`
  width: 56px;
  height: 56px;
  background-color: #8257e5;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const ContactButton = styled(BorderlessButton)`
  flex: 1;
  flex-direction: row;
  height: 56px;
  background-color: #04d361;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const ContactButtonText = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #fff;
  font-size: 16px;
  margin-left: 16px;
`;




