import React from 'react';
import { View } from 'react-native';

import { Container, Form, Label, Input, InputContainer, Submit, SubmitText } from './styles';

const ConfigurarSenha = () => {
  return (
      <Container>
          <Form>
            <Label>
                Senha atual*
            </Label>
            <InputContainer>
                <Input placeholder="Senha atual" keyboardType="numeric"/>
            </InputContainer>
            <Label>
                Nova senha*
            </Label>
            <InputContainer>
                <Input placeholder="Maximo 4 digitos" keyboardType="numeric"/>
            </InputContainer>
            <Label>
                Confirmar nova senha*
            </Label>
            <InputContainer>
                <Input placeholder="Confirmar nova senha" keyboardType="numeric"/>
            </InputContainer>
            <Submit onPress={() => {}}>
                <SubmitText>
                    Salvar senha
                </SubmitText>
            </Submit>
          </Form>
      </Container>
  );
}

export default ConfigurarSenha;