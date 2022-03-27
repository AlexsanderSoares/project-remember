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

export const ContainerScroll = styled.ScrollView``; 

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

export const ButtonChoiceContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const ButtonChoice = styled.TouchableOpacity`
    width: 49%;
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.active ? "#483D8B" : "#ccc"};
    border-radius: 4px;
    margin-top: 15px;
`;

export const ButtonChoiceText = styled.Text`
    font-weight: bold;
    color: ${props => props.active ? "#fff" : "#000"};
`;

export const List = styled.View`
    margin-top: 10px;
`;

export const ListItem = styled.TouchableOpacity`
    width: 100%;
    min-height: 50px;
    justify-content: center;
    padding: 10px;
    background-color: ${props => props.selected ? "#483D8B" : "#fff"};
    border-width: 1px;
    border-color: #999;
    border-radius: 4px;
    margin-top: 3px;
`;

export const ListItemText = styled.Text`
    font-weight: bold;
    font-size: 15px;
    color: ${props => props.selected ? "#fff" : "#000"};
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#bbb',
})`
    padding: 10px 15px;
    background: #eee;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    color: #000;
    font-weight: bold;
    margin-top: 10px;
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