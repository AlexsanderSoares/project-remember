import React, {useEffect, useState} from 'react';
import { View } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import { Container, Form, Label, Input, InputContainer, Submit, SubmitText } from './styles';

import RequestPassword from '../../components/RequestPassword';

const ConfigurarSenha = () => {

    const navigation = useNavigation();
    const route = useRoute();

    const [authorized, setAuthorized] = useState(false);
    const [passwordRequest, setPasswordRequest] = useState(true);

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
            {/* <RequestPassword showBackButton={true}/> */}
        </Container>
    );
}

export default ConfigurarSenha;