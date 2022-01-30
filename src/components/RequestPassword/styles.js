import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';


export const ModalContainer = styled(LinearGradient).attrs({
    colors: ['#483D8B', '#6A5ACD'],
    start: {x: 0, y: 0},
    end: {x: 1, y: 1}
})`
    flex: 1;
    padding: ${getStatusBarHeight()}px 20px 0 20px;
`;

export const CenterContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const RequestPasswordContainer = styled.View`
    width: 90%;
    padding: 20px;
    border-radius: 4px;
`;

export const InputContainer = styled.View`
    padding: 5px;
    align-items: center;
`;

export const InputPassword = styled.TextInput.attrs({
    keyboardType: 'numeric',
    secureTextEntry: true,
})`
    width: 80%;
    height: 40px;
    background-color: #fff;
    border-radius: 4px;
    text-align: center;
    margin-top: 15px;
    font-size: 15px;
    font-weight: bold;
`;

export const OtherOption = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    width: 60%;
`;

export const OtherOptionText = styled.Text`
    font-size: 15px;
    text-align: center;
    color: #fff;
    font-weight: bold;
`;

export const GoBackButtonContainer = styled.TouchableOpacity`
    width: 100%;
    /* margin-top: 10px; */
    align-items: flex-start;
`;