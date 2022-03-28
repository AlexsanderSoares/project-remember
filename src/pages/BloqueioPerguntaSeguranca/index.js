import React, {useState, useEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useRoute} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {BackHandler} from 'react-native';

import { Container, Input, Pergunta, Submit, SubmitText } from './styles';

const BloqueioPerguntaSeguranca = () => {

    const navigation = useNavigation();
    const route = useRoute();

    const [pergunta, setPergunta] = useState('');
    const [resposta, setResposta] = useState('');
    const [userResposta, setUserResposta] = useState('');


    useEffect(() => {
        loadConfig();

        const redirectToConfig = () => {
            navigation.navigate('Configuracoes');

            return true;
        }

        const backHandler = BackHandler.addEventListener('hardwareBackPress', redirectToConfig);

        return () => backHandler.remove();

    }, []);

    async function loadConfig(){

        const _pergunta = JSON.parse(await AsyncStorage.getItem('PasswordRemember@securityQuestion'));
        const _resposta = await AsyncStorage.getItem('PasswordRemember@securityQuestionResponse');

        setPergunta(_pergunta);
        setResposta(_resposta);
    }

    function verifyResponse(){

        console.log("Resposta",resposta);
        console.log("User Resposta",userResposta);
        if(userResposta.toLocaleLowerCase() === resposta)
            navigation.navigate(route.params.rName, {authorized: true});
        else
            Toast.show({
                type: 'error',
                text1: "Resposta incorreta",
                position: 'bottom',
                visibilityTime: 3000,
            });
    }

    return (
        <Container>
            <MaterialCommunityIcons name='lock' size={150} color="#fff"/>
            <Pergunta>
                {pergunta.pergunta}
            </Pergunta>
            <Input placeholder="Digite aqui a resposta" value={userResposta} onChangeText={setUserResposta}/>
            <Submit onPress={() => verifyResponse()}>
              <SubmitText>
                  Enviar
              </SubmitText>
            </Submit>
        </Container>
    );
}

export default BloqueioPerguntaSeguranca;