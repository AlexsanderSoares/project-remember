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
`;

export const TitleContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
`;

export const Title = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: #fff;
`;

export const Form = styled.View`
    flex-direction: row;
    margin-top: 15px;
    padding: 0 20px;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#999'
})`
    flex: 1;
    padding: 12px 0px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    font-size: 16px;
    color: #333;
    background: #fff;
`;

export const Submit = styled.TouchableOpacity.attrs({
    disabled: true
})`
    background: #fff;
    justify-content: center;
    padding: 0 10px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
`;

export const Menu = styled.TouchableOpacity`
    /* padding: 0 10px 0 20px; */
    justify-content: center;
`;

export const ListEmpty = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    /* background: #000; */
`;

export const ListEmptyText = styled.Text`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    opacity: 0.5;
    text-align: center;
    /* padding: 0 20px; */
`;

export const List = styled.FlatList.attrs({
    contentContainerStyle: {flexGrow: 1, paddingHorizontal: 20, paddingBottom: 55},
    showVerticalScrollIndicator: false,
})`
    /* margin-top: 20px; */
    /* padding: 0 20px; */
`;

export const Image = styled.Image`
    width: 200px;
    height: 200px;
`;