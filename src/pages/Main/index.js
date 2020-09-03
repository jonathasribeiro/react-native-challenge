import React from 'react';
import Lottie from 'lottie-react-native';

import exercise from '~/assets/exercise.json';

import {Container, Buttons, Button, ButtonText} from './styles';

export default function Main({navigation}) {
  function navigationPages() {
    navigation.navigate('Calculator');
  }

  return (
    <Container>
      <Lottie
        resizeMode="contain"
        style={{width: 300}}
        source={exercise}
        autoPlay
        loop
      />
      <Buttons>
        <Button onPress={() => {}}>
          <ButtonText>Quem Somos</ButtonText>
        </Button>
        <Button onPress={navigationPages}>
          <ButtonText>Calculadora IMC</ButtonText>
        </Button>
      </Buttons>
    </Container>
  );
}
