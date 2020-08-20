import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #f0f0f7;
`;

export const SearchForm = styled.View`
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  color: #d4c2ff;
  font-family: 'Archivo_400Regular';
`;

export const FormTextInput = styled.TextInput`
  height: 56px;
  background-color: #fff;
  border-radius: 8;
  justify-content: center;
  padding-horizontal: 16;
  margin-top: 4px;
  margin-bottom: 12px;
`;

export const InputBlock = styled.View`
  width: 48%;
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SubmitButton = styled(BorderlessButton)`
  flex-direction: row;
  height: 56px;
  background-color: #04d361;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const SubmitButtonText = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #fff;
`;


