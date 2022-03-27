import React, {useState, useEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import { Container, InputPassword, 
            RowContainer, PasswordContainer, KeyboardContainer, 
                    ButtonKeyboard, ButtonKeyboardText, ForgotPassword, ForgotPasswordText } from './styles';

const RequestPassword = () => {

    const navigation = useNavigation();

    const [password, setPassword] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [passVisible, setPassVisible] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        loadSettings();
    }, []);

    async function loadSettings(){
        setUserPassword(await AsyncStorage.getItem('PasswordRemember@userPassword'));
    }

    function addPasswordChar(char){

        const _pass = password + char;
        
        if(_pass.length <= 4)
            setPassword(_pass);
        
        if(_pass.length === 4)
            if(_pass === userPassword)
                navigation.navigate('Home');
            else
                setError(true);
    }

    return (
        <Container>
            <MaterialCommunityIcons name="lock" size={150} color="#fff"/>
            <PasswordContainer>
                <RowContainer>
                    <InputPassword error={error} value={passVisible ? password.charAt(0) : password.length >= 1 ? '*' : ''}/>
                    <InputPassword error={error} value={passVisible ? password.charAt(1) : password.length >= 2 ? '*' : ''}/>
                    <InputPassword error={error} value={passVisible ? password.charAt(2) : password.length >= 3 ? '*' : ''}/>
                    <InputPassword error={error} value={passVisible ? password.charAt(3) : password.length >= 4 ? '*' : ''}/>
                </RowContainer>
            </PasswordContainer>
            <ForgotPassword>
                <ForgotPasswordText>
                    Esqueceu a senha?
                </ForgotPasswordText>
            </ForgotPassword>
            <KeyboardContainer>
                <RowContainer>
                    <ButtonKeyboard onPress={() => addPasswordChar("1")}>
                        <ButtonKeyboardText>
                            1
                        </ButtonKeyboardText>
                    </ButtonKeyboard>
                    <ButtonKeyboard onPress={() => addPasswordChar("2")}>
                        <ButtonKeyboardText>
                            2
                        </ButtonKeyboardText>
                    </ButtonKeyboard>
                    <ButtonKeyboard onPress={() => addPasswordChar("3")}>
                        <ButtonKeyboardText>
                            3
                        </ButtonKeyboardText>
                    </ButtonKeyboard>
                </RowContainer>
                <RowContainer>
                    <ButtonKeyboard onPress={() => addPasswordChar("4")}>
                        <ButtonKeyboardText>
                            4
                        </ButtonKeyboardText>
                    </ButtonKeyboard>
                    <ButtonKeyboard onPress={() => addPasswordChar("5")}>
                        <ButtonKeyboardText>
                            5
                        </ButtonKeyboardText>
                    </ButtonKeyboard>
                    <ButtonKeyboard onPress={() => addPasswordChar("6")}>
                        <ButtonKeyboardText>
                            6
                        </ButtonKeyboardText>
                    </ButtonKeyboard>
                </RowContainer>
                <RowContainer>
                    <ButtonKeyboard onPress={() => addPasswordChar("7")}>
                        <ButtonKeyboardText>
                            7
                        </ButtonKeyboardText>
                    </ButtonKeyboard>
                    <ButtonKeyboard onPress={() => addPasswordChar("8")}>
                        <ButtonKeyboardText>
                            8
                        </ButtonKeyboardText>
                    </ButtonKeyboard>
                    <ButtonKeyboard onPress={() => addPasswordChar("9")}>
                        <ButtonKeyboardText>
                            9
                        </ButtonKeyboardText>
                    </ButtonKeyboard>
                </RowContainer>
                <RowContainer>
                    <ButtonKeyboard onPress={() => setPassVisible(!passVisible)}>
                        <ButtonKeyboardText>
                            <FontAwesome name={passVisible ? "eye-slash" : "eye"} size={25} color="#fff" />
                        </ButtonKeyboardText>
                    </ButtonKeyboard>
                    <ButtonKeyboard onPress={() => addPasswordChar("0")}>
                        <ButtonKeyboardText>
                            0
                        </ButtonKeyboardText>
                    </ButtonKeyboard>
                    <ButtonKeyboard onPress={() => {setPassword(password.substring(0, password.length - 1)); setError(false)}}>
                        <ButtonKeyboardText>
                            <MaterialCommunityIcons name="backspace" size={25} color="#fff"/>
                        </ButtonKeyboardText>
                    </ButtonKeyboard>
                </RowContainer>
            </KeyboardContainer>
        </Container>
    );
}

export default RequestPassword;