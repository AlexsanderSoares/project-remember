import styled from 'styled-components/native'

export const ModalContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: 'rgba(0, 0, 0, 0.5)';
`;

export const GeneratorPasswordContainer = styled.View`
    width: 90%;
    padding: 20px;
    background-color: #fff;
    border-radius: 4px;
`;

export const TitleContainerModal = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const TitleModal = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #000;
`;

export const CloseButton = styled.TouchableOpacity`
    padding: 5px;
`;
