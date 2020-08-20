import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #8257E5;
  justify-content: center;
  padding: 40px;
`;

export const Logo = styled.Image`
  width: 100%;
`;

export const HelloText = styled.Text`
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  margin-top: 20px;
  font-family: Poppins_400Regular;
`;

export const BoldText = styled.Text`
  font-family: Poppins_600SemiBold;
`;

export const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`;

export const Button = styled(RectButton)`
  height: 150px;
  width: 48%;
  background-color: ${props => props.color};
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
`;

export const ButtonText = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #fff;
  font-size: 18px;
`;

export const TotalConnections = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #dcc2ff;
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
  margin-top: 40px;
`;