import React, {useState, useEffect} from 'react';
import {ProgressBar, Colors} from 'react-native-paper';
import {Alert, Keyboard, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import { Container, 
            Form, 
            Label, 
            Input, 
            InputContainer, 
            PasswordContainer, 
            GeneratePassword, 
            PasswordInput, 
            DicasContainer, DicasLabel, Dicas, Submit, SubmitText, Dica, DicaText, InputModal } from './styles';

import {ModalContainer, TitleContainerModal, TitleModal, CloseButton, GeneratorPasswordContainer} from './stylesGeneratePassword';

// import GenaratorPassword from '../../components/GenaratorPassword';


function NovaSenha(props){

    const passwords = useSelector(state => state.data);
    const password_id = props.route.params?.password_id;

    const [passwordLevel, setPasswordLevel] = useState(0);
    const [colorBar, setColorBar] = useState("#000");

    const [name, setName] = useState(password_id ? getPassword().name : "");
    const [description, setDescription] = useState(password_id ? getPassword().description : "");
    const [user, setUser] = useState(password_id ? getPassword().user : "");
    const [password, setPassword] = useState(password_id ? getPassword().password : "");

    // STATE GENERATE PASSWORD
    const [visibleModal, setVisibleModal] = useState(false);
    const [passwordLength, setPasswordLength] = useState("8");
    const [incluirNumeros, setIncluirNumeros] = useState(true);
    const [incluirLetrasMinusculas, setIncluirLetrasMinusculas] = useState(true);
    const [incluirLetrasMaiusculas, setIncluirLetrasMaiusculas] = useState(true);
    const [incluirCaracteresEspeciais, setIncluirCaracteresEspeciais] = useState(true);

    const radio_form_props = [
        {label: 'Sim', value: true },
        {label: 'Não', value: false }
    ];

    const navigation = useNavigation();
    const dispatch = useDispatch();


    function getPassword(){
        return passwords.filter(password => {
            return password.id === password_id;
        })[0];
    }

    function numberGenerate(){
        return (Math.floor(Math.random() * (9 - 0)) + 0).toString();
    }

    function generateUppercaseChar(){
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return characters.charAt(Math.floor(Math.random() * characters.length));
    }

    function generateLowercaseChar(){
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        return characters.charAt(Math.floor(Math.random() * characters.length));
    }

    function generateSymbol(){
        const characters = '@#$%*';
        return characters.charAt(Math.floor(Math.random() * characters.length));
    }

    function generatePassword(){

        if(passwordLength <= 0){
            Alert.alert("Ops!", "Por favor, preeencha o campo \"Comprimento da senha\".");
            return;
        }

       if(!incluirLetrasMinusculas && !incluirLetrasMaiusculas && !incluirNumeros && !incluirCaracteresEspeciais){
            Alert.alert("Ops!", "É necessário selecionar pelo menos uma regra para a sua senha");
            return;
       }

       let pass = '';

       // Distribui os tipos de caracteres com base nas regras seleciuonadas. 35% minusculas, 30% maiusculas, 25% numeros e 10% simbolos
       let qt_chars_lowercase = incluirLetrasMinusculas ? Math.ceil(passwordLength * 0.35) >= 1 ? Math.ceil(passwordLength * 0.35) : 1 : 0;
       let qt_chars_uppercase = incluirLetrasMaiusculas ? Math.ceil(passwordLength * 0.30) >= 1 ? Math.ceil(passwordLength * 0.30) : 1 : 0;
       let qt_chars_number = incluirNumeros ? Math.ceil(passwordLength * 0.25) >= 1 ? Math.ceil(passwordLength * 0.25) : 1 : 0;
       let qt_chars_symbols = incluirCaracteresEspeciais ? Math.ceil(passwordLength * 0.10) >= 1 ? Math.ceil(passwordLength * 0.10) : 1 : 0;

       // Verifica se a distribuição bate com o tamanho necessario da senha, se não, corrige
       const check_length = qt_chars_lowercase + qt_chars_uppercase + qt_chars_number + qt_chars_symbols;
       if(check_length < passwordLength){
            if(incluirLetrasMinusculas)
                qt_chars_lowercase += passwordLength - check_length;
            else if(incluirLetrasMaiusculas)
                qt_chars_uppercase += passwordLength - check_length;
            else if(incluirNumeros)
                qt_chars_number += passwordLength - check_length;
            else
                qt_chars_symbols += passwordLength - check_length;
       }

       let i = 0;
       while(i < passwordLength){

            let n = Math.floor(Math.random() * 4);

            console.log(n);

            if(n === 0 && qt_chars_lowercase > 0){
                pass += generateLowercaseChar();
                i++;
                qt_chars_lowercase--;
            }

            if(n === 1 && qt_chars_uppercase > 0){
                pass += generateUppercaseChar();
                i++;
                qt_chars_uppercase--;
            }

            if(n === 2 && qt_chars_number > 0){
                pass += numberGenerate();
                i++;
                qt_chars_number--;
            }

            if(n === 3 && qt_chars_symbols > 0){
                pass += generateSymbol();
                i++;
                qt_chars_symbols--;
            }
       }

       setPassword(pass);

       handlerPasswordInput(pass);

       setVisibleModal(false);
        
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
                text1: "Por favor, preencha os campos \"Nome\" e \"Senha\"",
                position: 'bottom',
                visibilityTime: 3000,
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
                    Nome*
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
                    Senha*
                </Label>
                <PasswordContainer>
                    <PasswordInput value={password} placeholder="Digite aqui a sua senha" onChangeText={password => handlerPasswordInput(password)} autoCapitalize="none"/>
                    <GeneratePassword onPress={() => setVisibleModal(true)}>
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
                <Submit onPress={sevePassword}>
                    <SubmitText>
                        {!!password_id ? "Salvar alterações" : "Salvar senha"}
                    </SubmitText>
                </Submit>
            </Form>
            <Modal
                    animationType='fade'
                    transparent={true}
                    visible={visibleModal}
                    onRequestClose={() => setVisibleModal(!visibleModal)}
            >
                <ModalContainer>
                    <GeneratorPasswordContainer>
                        <TitleContainerModal>
                            <TitleModal>
                                Gerador de senhas
                            </TitleModal>
                            <CloseButton onPress={() => setVisibleModal(false)}>
                                <FontAwesome name='close' size={20} color='#483D8B'/>
                            </CloseButton>
                        </TitleContainerModal>
                        <Label>
                            Comprimento da senha (Caracteres)
                        </Label>
                        <InputContainer>
                            <InputModal value={passwordLength} placeholder="Ex: 8" onChangeText={passwordLength => setPasswordLength(passwordLength.replace(/[^0-9]/g, ''))}/>
                        </InputContainer>
                        <Label>
                            Incluir letras minusculas
                        </Label>
                        <InputContainer>
                            <RadioForm
                                radio_props={radio_form_props}
                                initial={incluirLetrasMinusculas ? 0 : 1}
                                onPress={value => setIncluirLetrasMinusculas(value)}
                                buttonColor='#483D8B'
                                selectedButtonColor='#483D8B'
                            />
                        </InputContainer>
                        <Label>
                            Incluir letras maiusculas
                        </Label>
                        <InputContainer>
                            <RadioForm
                                radio_props={radio_form_props}
                                initial={incluirLetrasMaiusculas ? 0 : 1}
                                onPress={value => setIncluirLetrasMaiusculas(value)}
                                buttonColor='#483D8B'
                                selectedButtonColor='#483D8B'
                            />
                        </InputContainer>
                        <Label>
                            Incluir numeros
                        </Label>
                        <InputContainer>
                            <RadioForm
                                radio_props={radio_form_props}
                                initial={incluirNumeros ? 0 : 1}
                                onPress={value => setIncluirNumeros(value)}
                                buttonColor='#483D8B'
                                selectedButtonColor='#483D8B'
                            />
                        </InputContainer>
                        <Label>
                            Incluir caracteres especiais
                        </Label>
                        <InputContainer>
                            <RadioForm
                                radio_props={radio_form_props}
                                initial={incluirCaracteresEspeciais ? 0 : 1}
                                onPress={value => setIncluirCaracteresEspeciais(value)}
                                buttonColor='#483D8B'
                                selectedButtonColor='#483D8B'
                            />
                        </InputContainer>
                        <Submit onPress={generatePassword}>
                            <SubmitText>
                               Criar senha
                            </SubmitText>
                        </Submit>
                    </GeneratorPasswordContainer>
                </ModalContainer>
            </Modal>
        </Container>
    );
}

export default NovaSenha;