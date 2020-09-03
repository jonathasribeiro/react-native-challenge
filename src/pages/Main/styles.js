import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #5ba2f4;
  align-items: center;
  justify-content: center;
`;

export const Buttons = styled.View``;

export const Button = styled.TouchableOpacity`
  width: 300px;
  border-width: 2px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
`;

export const ButtonText = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  font-size: 20px;
`;
