import styled from "styled-components/native";
import LinearGradient from 'react-native-linear-gradient'
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled(LinearGradient).attrs({
    colors: ['#483D8B', '#6A5ACD'],
    start: {x: 0, y: 0},
    end: {x: 1, y: 1}
})`
    flex: 1;
    padding: ${70 + getStatusBarHeight()}px 20px 0 20px;
`;

export const Form = styled.View`
    background: #fff;
    padding: 15px 20px;
    border-radius: 4px;
`;

export const Label = styled.Text`
    font-size: 13px;
    color: #999;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#ccc',
})`
    flex: 1;
    padding: 10px 15px;
    background: #eee;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    color: #000;
    font-weight: bold;
`;

export const InputModal = styled.TextInput.attrs({
    placeholderTextColor: '#ccc',
    keyboardType: 'numeric',
})`
    flex: 1;
    padding: 10px 15px;
    background: #eee;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    color: #000;
    font-weight: bold;
`;

export const PasswordInput = styled.TextInput.attrs({
    placeholderTextColor: '#ccc'

})`
    flex: 1;
    padding: 10px 15px;
    background: #eee;
    border-top-left-radius: 4px;
    color: #483D8B;
    font-weight: bold;
`;

export const InputContainer = styled.View`
    flex-direction: row;
    margin-bottom: 10px;
`;

export const PasswordContainer = styled.View`
    flex-direction: row;
`;

export const GeneratePassword = styled.TouchableOpacity`
    background: #ddd;
    justify-content: center;
    padding: 0 10px;
    border-top-right-radius: 4px;
`;

export const DicasContainer = styled.View`
    margin-top: 15px;
    background: #eee;
    padding: 15px 20px;
    border-radius: 4px;
`;

export const DicasLabel = styled.Text`
    font-size: 15px;
    color: #483D8B;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const Dica = styled.View`
    margin-top: 5px;
    border-bottom-color: #999;
    border-bottom-width: 0.5px;
`;

export const DicaText = styled.Text`
    font-size: 13px;
    color: #999;
    margin-bottom: 5px;
`;

export const SubmitText = styled.Text`
    font-size: 15px;
    color: #fff;
    font-weight: bold;
`;

export const Submit = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    background: #483D8B;
    border-radius: 4px;
    margin-top: 15px;
`;
