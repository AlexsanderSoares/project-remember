import React, {useState} from 'react';

import { Container, Form, Label, ButtonChoice, 
                ButtonChoiceText, ButtonChoiceContent, List, ListItem, ListItemText, 
                    Input, ContainerScroll, Submit, SubmitText } from './styles';

import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PerguntaDeSeguranca = () => {

    const [customizeQuestion, setCustomizeQuestion] = useState(0);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [customizeQuestionValue, setCustomizeQuestionValue] = useState('');
    const [response, setResponse] = useState('');

    const perguntas = [
        {id: 1, pergunta: 'Qual o nome do seu primeiro animal de estimação?'},
        {id: 2, pergunta: 'Qual o nome do seu melhor amigo de infância?'},
        {id: 3, pergunta: 'Qual é a sua comida favorita?'},
        {id: 4, pergunta: 'Qual é o emprego dos seus sonhos?'},
        {id: 5, pergunta: 'Qual o nome da sua professora preferida do ensino médio?'},
    ];

    function ItemList(item){
        return(
            <ListItem key={item.id} onPress={() => setSelectedQuestion(item.id)} selected={item.id === selectedQuestion ? true : false}>
                <ListItemText selected={item.id === selectedQuestion ? true : false}>
                    {item.pergunta}
                </ListItemText>
            </ListItem>
        );
    }

    function ListQuestionComponent(){
        return(
            <List>
                {perguntas.map(pergunta => {
                    return ItemList(pergunta)
                })}
            </List>
        );
    }

    async function saveQuastion(){
        if(customizeQuestion === 1){
            if(!!customizeQuestionValue)
                Toast.show({
                    type: 'error',
                    text1: "Por favor, preencha o campo Pergunta",
                    position: 'bottom',
                    visibilityTime: 3000,
                });
            else
                await AsyncStorage.setItem('PasswordRemember@question', customizeQuestionValue);
        }else{
            if(!!selectedQuestion)
                Toast.show({
                    type: 'error',
                    text1: "Por favor, selecione uma pergunta",
                    position: 'bottom',
                    visibilityTime: 3000,
                });
            else
                await AsyncStorage.setItem('PasswordRemember@question', perguntas[selectedQuestion-1].pergunta);
        }

        if(!response)
            Toast.show({
                type: 'error',
                text1: "Por favor, preencha o campo Resposta",
                position: 'bottom',
                visibilityTime: 3000,
            });
        else{
            await AsyncStorage.setItem('PasswordRemember@question_response', response);

            Toast.show({
                type: 'success',
                text1: "A pergunta de segurança foi salva!",
                position: 'bottom',
                visibilityTime: 3000,
            });
        }
    }

    return (
        <Container>
            <ContainerScroll>
                <Form>
                    <Label>
                        Pergunta
                    </Label>
                    <ButtonChoiceContent>
                        <ButtonChoice onPress={() => setCustomizeQuestion(0)} active={customizeQuestion === 0 ? true : false}>
                            <ButtonChoiceText active={customizeQuestion === 0 ? true : false}>
                                Escolher pergunta
                            </ButtonChoiceText>
                        </ButtonChoice>
                        <ButtonChoice onPress={() => setCustomizeQuestion(1)} active={customizeQuestion === 1 ? true : false}>
                            <ButtonChoiceText active={customizeQuestion === 1 ? true : false}>
                                Personalizar pergunta
                            </ButtonChoiceText>
                        </ButtonChoice>
                    </ButtonChoiceContent>
                    {!customizeQuestion && <ListQuestionComponent/>}
                    {!!customizeQuestion && <Input value={customizeQuestionValue} onChangeText={setCustomizeQuestionValue} placeholder="Digite aqui a sua pergunta"/>}
                </Form>
                <Form>
                    <Label>
                        Resposta
                    </Label>
                    <Input placeholder="Digite aqui a resposta para a pergunta" value={response} onChangeText={setResponse}/>
                </Form>
                <Submit>
                    <SubmitText onPress={() => saveQuastion()}>
                        Salvar
                    </SubmitText>
                </Submit>
            </ContainerScroll>
        </Container>
    );
}

export default PerguntaDeSeguranca;