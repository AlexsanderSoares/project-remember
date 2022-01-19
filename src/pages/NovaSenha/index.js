import React, {useState, useEffect} from 'react';
import {ProgressBar, Colors} from 'react-native-paper';
import {Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import { Container, 
            Form, 
            Label, 
            Input, 
            InputContainer, 
            PasswordContainer, 
            GeneratePassword, 
            PasswordInput, 
            DicasContainer, DicasLabel, Dicas, Submit, SubmitText, Dica, DicaText } from './styles';


function NovaSenha(props){

    const passwords = useSelector(state => state.data);
    const password_id = props.route.params?.password_id;

    const [passwordLevel, setPasswordLevel] = useState(0);
    const [colorBar, setColorBar] = useState("#000");

    const [name, setName] = useState(password_id ? getPassword().name : "");
    const [description, setDescription] = useState(password_id ? getPassword().description : "");
    const [user, setUser] = useState(password_id ? getPassword().user : "");
    const [password, setPassword] = useState(password_id ? getPassword().password : "");

    const navigation = useNavigation();
    const dispatch = useDispatch();


    function getPassword(){
        return passwords.filter(password => {
            return password.id === password_id;
        })[0];
    }

    useEffect(() => {
        function updatePasswordVerification(){
            if(password_id){
                handlerPasswordInput(password);

                navigation.setOptions({ title: "Alterar senha"});
            }
        }

        updatePasswordVerification();
    }, []);

    function sevePassword(){

        if(!name || !password){
            Toast.show({
                type: 'error',
                text1: "Os campos Nome e Senha são obrigatórios",
                position: 'bottom',
                visibilityTime: 2000,
            });

            return;
        }
            
        const passData = {
            id: new Date().getTime(),
            name,
            description,
            user, 
            password,
        };

        dispatch(password_id ? { type: 'UPDATE_PASSWORD', password: passData, id: password_id } : { type: 'ADD_PASSWORD', password: passData });

        setName("");
        setDescription("");
        setUser("");
        setPassword("");

        Keyboard.dismiss();

        Toast.show({
            type: 'success',
            text1: "A senha foi salva com sucesso",
            position: 'bottom',
            visibilityTime: 1500,
        });

        navigation.navigate('Home');
    }

    const handlerPasswordInput = (_password) => {

        setPassword(_password);

        let _passwordLevel = 0;

        _passwordLevel += _password.length >= 8 ? 
            !isNaN(parseFloat(_password)) && isFinite(_password) ? 1 : 3 : 0;

        _passwordLevel += new RegExp("[A-Z]").test(_password) ? 1 : 0;
        _passwordLevel += new RegExp("[a-z]").test(_password) ? 1 : 0;
        _passwordLevel += new RegExp("[0-9]").test(_password) ? 2 : 0;
        _passwordLevel += new RegExp("[^a-zA-Z 0-9]").test(_password) ? 3 : 0;

        setPasswordLevel(_passwordLevel / 10);

        setColorBar(getColorPasswordLevel(_passwordLevel/10));
    }

    const getColorPasswordLevel = (_passwordLevel) => {

        if(_passwordLevel == 0.1)
            return Colors.red400;

        if(_passwordLevel == 0.2)
            return Colors.red400;
        
        if(_passwordLevel == 0.3)
            return Colors.red400;

        if(_passwordLevel == 0.4)
            return Colors.red400;

        if(_passwordLevel == 0.5)
            return Colors.orange400;

        if(_passwordLevel == 0.6)
            return Colors.orange400;
        
        if(_passwordLevel == 0.7)
            return Colors.yellow600;

        if(_passwordLevel == 0.8)
            return Colors.yellow600;
        
        if(_passwordLevel == 0.9)
            return Colors.green400;

        if(_passwordLevel == 1)
            return Colors.green400;

        return "#999";

    }

    return (
        <Container>
            <Form>
                <Label>
                    Nome
                </Label>
                <InputContainer>
                    <Input value={name} placeholder="Ex: Senha do Email" onChangeText={setName}/>
                </InputContainer>
                <Label>
                    Descrição (Opcional)
                </Label>
                <InputContainer>
                    <Input value={description} placeholder="Ex: Senha do email pessoal" onChangeText={setDescription}/>
                </InputContainer>
                <Label>
                    Usuário (Opcional)
                </Label>
                <InputContainer>
                    <Input value={user} placeholder="Ex: exemplo@email.com" onChangeText={setUser} autoCapitalize="none"/>
                </InputContainer>
                <Label>
                    Senha
                </Label>
                <PasswordContainer>
                    <PasswordInput value={password} placeholder="Digite aqui a sua senha" onChangeText={password => handlerPasswordInput(password)} autoCapitalize="none"/>
                    <GeneratePassword>
                        <Icon name="lightbulb-on" size={22} color="#483D8B"/>
                    </GeneratePassword>
                </PasswordContainer>
                <ProgressBar progress={passwordLevel} color={colorBar} />
                <DicasContainer>
                    <DicasLabel>
                        Dicas para as suas senhas
                    </DicasLabel>
                    <Dica>
                        <DicaText>
                            Caso ainda não possua uma senha, você pode criar uma nova senha tocando no icone <Icon name="lightbulb-on" size={15} color="#483D8B"/>
                        </DicaText>
                    </Dica>
                    <Dica>
                        <DicaText>
                            Evite utilizar infromações pessoais, como nome, data de aniversário e etc.
                        </DicaText>
                    </Dica>
                    <Dica>
                        <DicaText>
                            Utilize senhas de no minimo 8 caracteres, combinando letras maiúsculas e minúsculas, numeros e caracteres especiais.
                        </DicaText>
                    </Dica>
                </DicasContainer>
            </Form>
            <Submit onPress={sevePassword}>
                <SubmitText>
                    {!!password_id ? "Salvar alterações" : "Salvar senha"}
                </SubmitText>
            </Submit>
        </Container>
    );
}

export default NovaSenha;