import React, {useEffect, useState} from 'react';
import { View } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

import { Container, Form, Label, Input, 
                InputContainer, Submit, SubmitText, 
                        FormOptionContainer, DicasContainer, DicaText, 
                                DicasLabel, OptionButtonEnable, OptionButtonDisable, OptionButtonText } from './styles';

import RequestPassword from '../../components/RequestPassword';

const ConfigurarSenha = () => {

    const navigation = useNavigation();
    const route = useRoute();

    const [enablePass, setEnablePass] = useState(false);
    const [newPassword, setNewpassword] = useState('');
    const [confirmNewPassword, setCofirmNewPassword] = useState('');
    const [enableConfig, setEnableConfig] = useState(false);


    useEffect(() => {
        loadConfigPass();
    }, []);


    async function loadConfigPass(){
        const pergunta = await AsyncStorage.getItem('PasswordRemember@securityQuestion');
        const resposta = await AsyncStorage.getItem('PasswordRemember@securityQuestionResponse');

        if(!pergunta || !resposta)
            setEnableConfig(false);
        else
            setEnableConfig(true);

        const _enablePass = await AsyncStorage.getItem('PasswordRemember@enablePassword');

        if(_enablePass)
            setEnablePass(_enablePass === "0" ? false : true);
        else
            setEnablePass(false);
    }



    async function enableOrDesablePassword(value){
        const passwordApp = await AsyncStorage.getItem('PasswordRemember@passwordApp');

        if(!passwordApp){
            Toast.show({
                type: 'error',
                text1: "Configure uma nova senha antes de ativar.",
                position: 'bottom',
                visibilityTime: 3000,
            });

            return;
        }else if(!enableConfig){

            Toast.show({
                type: 'error',
                text1: "Configure uma pergunta de seguran??a antes de ativar a senha.",
                position: 'bottom',
                visibilityTime: 3000,
            });
        
        }else{
            if(value)
                await AsyncStorage.setItem('PasswordRemember@enablePassword', "1");
            else
                await AsyncStorage.setItem('PasswordRemember@enablePassword', "0");

            setEnablePass(value);
        }
    }

    
    async function saveNewPassword(){

        if(!newPassword || !confirmNewPassword)
            Toast.show({
                type: 'error',
                text1: "Preencha os campos corretamente",
                position: 'bottom',
                visibilityTime: 3000,
            });
        else if(newPassword.length < 4)
            Toast.show({
                type: 'error',
                text1: "A senha deve ter 4 digitos",
                position: 'bottom',
                visibilityTime: 3000,
            });
        else if(newPassword !== confirmNewPassword)
            Toast.show({
                type: 'error',
                text1: "As senhas s??o diferentes. Tente novamente.",
                position: 'bottom',
                visibilityTime: 3000,
            });
        else{
            await AsyncStorage.setItem('PasswordRemember@passwordApp', newPassword);

            Toast.show({
                type: 'success',
                text1: "A senha foi salva com sucesso!",
                position: 'bottom',
                visibilityTime: 3000,
            });
        }

    }


    return (
        <Container>
            <Form>
                <Label>
                    Ativar ou desativar senha
                </Label>
                <FormOptionContainer>
                    <OptionButtonEnable onPress={() => enableOrDesablePassword(true)} disable={enablePass ? false : true}>
                        <OptionButtonText disable={enablePass ? false : true}>
                            Ativado
                        </OptionButtonText>
                    </OptionButtonEnable>
                    <OptionButtonDisable onPress={() => enableOrDesablePassword(false)} disable={!enablePass ? false : true}>
                        <OptionButtonText disable={!enablePass ? false : true}>
                            Desativado
                        </OptionButtonText>
                    </OptionButtonDisable>
                </FormOptionContainer>
                <DicasContainer>
                    <DicasLabel>
                        Aten????o
                    </DicasLabel>
                    <DicaText>
                        A senha ser?? solicitada para abrir o aplicativo e s?? sera poss??vel recupera-la com a pergunta de seguran??a, que dever ter sido configurada previamente.
                    </DicaText>
                    <DicaText>
                        Voc?? pode configurar uma nova senha no formul??rio abaixo.
                    </DicaText>
                </DicasContainer>
            </Form>
            <Form>
                <Label>
                    Nova senha*
                </Label>
                <InputContainer>
                    <Input value={newPassword} secureTextEntry={true} maxLength={4} onChangeText={setNewpassword} placeholder="Maximo 4 digitos" keyboardType="numeric"/>
                </InputContainer>
                <Label>
                    Confirmar nova senha*
                </Label>
                <InputContainer>
                    <Input value={confirmNewPassword} secureTextEntry={true} maxLength={4} onChangeText={setCofirmNewPassword} placeholder="Confirmar nova senha" keyboardType="numeric"/>
                </InputContainer>
                <Submit onPress={() => saveNewPassword()}>
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