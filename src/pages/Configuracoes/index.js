import React from 'react';
import { View } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import { Container, Form, Label, Submit, SubmitText } from './styles';

const Configuracoes = () => {

    const navigation = useNavigation();

    return (
            <Container>
                <Form>
                    <Label>
                        Senha do aplicativo
                    </Label>
                    <Submit onPress={() => navigation.navigate('ConfigurarSenha')}>
                        <SubmitText>
                            Configurar senha do aplicativo
                        </SubmitText>
                    </Submit>
                    <Label>
                        Pergunta de segurança
                    </Label>
                    <Submit onPress={() => {}}>
                        <SubmitText>
                            Configurar pergunta de segurança
                        </SubmitText>
                    </Submit>
                </Form>
                <Form>
                    <Label>
                        Idioma
                    </Label>
                </Form>
            </Container>
    );
}

export default Configuracoes;