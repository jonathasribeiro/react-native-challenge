import styled from 'styled-components/native';
import {Animated} from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #5ba2f4;
  align-items: center;
  justify-content: center;
`;

export const Card = styled(Animated.View)`
  background: #fff;
  height: 400px;
  border-radius: 4px;
  margin: 0 20px;
  width: 350px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 20px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0,0,0,0.7)',
})`
  width: 90%;
  height: 50px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #000;
  margin-bottom: 15px;
`;

export const Button = styled.TouchableOpacity`
  width: 90%;
  border-width: 2px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background: #4361ee;
`;

export const ButtonText = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  font-size: 20px;
`;
