import React, {useState} from 'react';

import {Container, Card, Input, Title, Button, ButtonText} from './styles';

export default function Calculator() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [definition, setDefinition] = useState('');
  const [result, setResult] = useState(false);
  const [imc, setImc] = useState(false);

  function calculate() {
    const value = weight / (height * height);
    setResult(true);
    setImc(value);

    if (value < 17) {
      setDefinition('Magreza');
    } else if (value < 24.9) {
      setDefinition('Normal');
    } else if (value < 29.9) {
      setDefinition('Sobre Peso');
    } else if (value < 39.9) {
      setDefinition('Obesidade');
    } else {
      setDefinition('Obesidade Grave');
    }
  }

  function renderInputs() {
    return (
      <>
        <Title>Calcule seu IMC</Title>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicione sua Altura (ex: 1.80)"
          onChangeText={(text) => setHeight(text)}
          returnKeyType="send"
        />
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicione seu Peso (ex: 67.3)"
          onChangeText={(text) => setWeight(text)}
          returnKeyType="send"
        />
        <Button onPress={() => calculate()}>
          <ButtonText>Calcular</ButtonText>
        </Button>
      </>
    );
  }

  function renderResult() {
    return (
      <>
        <Title>Seu IMC: {imc.toFixed(2)}</Title>
        <Title>Classificação: {definition}</Title>
        <Button onPress={() => setResult(false)}>
          <ButtonText>Voltar</ButtonText>
        </Button>
      </>
    );
  }

  return (
    <Container>
      <Card>{result ? renderResult() : renderInputs()}</Card>
    </Container>
  );
}
