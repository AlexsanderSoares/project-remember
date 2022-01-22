import React, {useState} from 'react';
import { Text, Modal } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import { Container, GeneratorPasswordContainer, 
         TitleContainer, Title, CloseButton, Label, InputContainer, Input, Submit, SubmitText } from './styles';

const GenaratorPassword = (props) => {

    const [visibleModal, setVisibleModal] = useState(true);
    const [passwordLength, setPasswordLength] = useState("8");
    const [incluirNumeros, setIncluirNumeros] = useState(true);
    const [incluirLetrasMinusculas, setIncluirLetrasMinusculas] = useState(true);
    const [incluirLetrasMaiusculas, setIncluirLetrasMaiusculas] = useState(true);
    const [incluirCaracteresEspeciais, setIncluirCaracteresEspeciais] = useState(true);

    const radio_form_props = [
        {label: 'Sim', value: true },
        {label: 'Não', value: false }
    ];

    return (
            <Modal
                    animationType='none'
                    transparent={true}
                    visible={visibleModal}
                    onRequestClose={() => setVisibleModal(!visibleModal)}
            >
                <Container>
                    <GeneratorPasswordContainer>
                        <TitleContainer>
                            <Title>
                                Gerador de senhas
                            </Title>
                            <CloseButton onPress={() => setVisibleModal(false)}>
                                <FontAwesome name='close' size={20} color='#483D8B'/>
                            </CloseButton>
                        </TitleContainer>
                        <Label>
                            Comprimento da senha (Caracteres)
                        </Label>
                        <InputContainer>
                            <Input value={passwordLength} placeholder="Ex: 8" onChangeText={setPasswordLength}/>
                        </InputContainer>
                        <Label>
                            Incluir letras minusculas
                        </Label>
                        <InputContainer>
                            <RadioForm
                                radio_props={radio_form_props}
                                initial={0}
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
                                initial={0}
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
                                initial={0}
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
                                initial={0}
                                onPress={value => setIncluirCaracteresEspeciais(value)}
                                buttonColor='#483D8B'
                                selectedButtonColor='#483D8B'
                            />
                        </InputContainer>
                        <Submit onPress={() => []}>
                            <SubmitText>
                               Criar senha
                            </SubmitText>
                        </Submit>
                    </GeneratorPasswordContainer>
                </Container>
            </Modal>
    );
}

export default GenaratorPassword;