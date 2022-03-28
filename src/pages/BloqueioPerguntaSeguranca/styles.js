import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled(LinearGradient).attrs({
    colors: ['#483D8B', '#6A5ACD'],
    start: {x: 0, y: 0},
    end: {x: 1, y: 1}
})`
    flex: 1;
    padding: 70px 20px 0 20px;
    justify-content: center;
    align-items: center;
`;

export const Pergunta = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin: 15px;
    color: #fff;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#ccc',
})`
    width: 80%;
    padding: 10px 15px;
    background: #eee;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    color: #000;
    font-weight: bold;
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
    width: 80%;
`;