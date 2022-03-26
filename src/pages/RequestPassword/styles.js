import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled(LinearGradient).attrs({
    colors: ['#483D8B', '#6A5ACD'],
    start: {x: 0, y: 0},
    end: {x: 1, y: 1}
})`
    flex: 1;
    padding-top: ${45 + getStatusBarHeight(true)}px;
    justify-content: center;
    align-items: center;
`;


export const RowContainer = styled.View`
    flex-direction: row;
`;

export const PasswordContainer = styled.View`
    margin-top: 50px;
`;

export const InputPassword = styled.TextInput.attrs({
    editable: false,
})`
    width: 50px;
    padding: 0px 0px 0px 0px;
    height: 50px;
    /* line-height: 0px; */
    background-color: #6A5ACD;
    border-bottom-width: 3px;
    border-bottom-color: ${props => props.error ? "#f00" : "#fff"};
    margin: 4px;
    text-align: center;
    font-size: 30px;
    color: #fff;
`;

export const ForgotPassword = styled.TouchableOpacity`
    padding: 5px;
`;

export const ForgotPasswordText = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #fff;
`;

export const KeyboardContainer = styled.View`
    margin-top: 30px;
    align-items: center;
`;

export const ButtonKeyboard = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    border: 3px solid #fff;
    align-items: center;
    justify-content: center;
    margin: 10px 15px;
`;

export const ButtonKeyboardText = styled.Text`
    color: #fff;
    font-size: 25px;
`;