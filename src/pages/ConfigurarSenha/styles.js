import styled from 'styled-components/native'
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
    margin-bottom: 15px;
`;

export const Label = styled.Text`
    font-size: 13px;
    color: #999;
    font-weight: bold;
`;

export const BackupContainer = styled.View`
    background: #eee;
    padding: 15px 20px;
    border-radius: 4px;
`;

export const BackupText = styled.Text`
    font-size: 13px;
    color: #000;
    margin-bottom: 5px;
`;

export const BackupTextNegrito = styled.Text`
    font-size: 13px;
    color: #483D8B;
    margin-bottom: 5px;
    margin-left: 5px;
    font-weight: bold;
`;

export const Submit = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    background: #483D8B;
    border-radius: 4px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const SubmitText = styled.Text`
    font-size: 15px;
    color: #fff;
    font-weight: bold;
`;

export const RadioButtonContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const RadioButtonLabel = styled.Text`
    font-size: 13px;
    color: #483D8B;
    font-weight: bold;
    margin-bottom: 2px;
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

export const InputContainer = styled.View`
    flex-direction: row;
    margin-bottom: 10px;
`;