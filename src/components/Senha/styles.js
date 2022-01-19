import styled from "styled-components/native";

export const Container = styled.View`
    padding: 20px;
    border-radius: 4px;
    background: #fff;
    margin-top: 15px;
`;

export const MenuContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const OptionsContainer = styled.View`
    flex-direction: row;
    justify-content: center;
`;

export const VisiblePassword = styled.TouchableOpacity`
    padding: 0px 5px;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
`;

export const Label = styled.Text`
    font-size: 13px;
    color: #999;
    margin-bottom: 5px;
    font-weight: bold;
`;

export const Name = styled.Text`
    font-size: 20px;
    color: #000;
    font-weight: bold;
`;

export const Description = styled.Text`
    font-size: 13px;
    color: #000;
    margin-bottom: 15px;
`;

export const Credential = styled.TextInput.attrs(({password}) => ({
    editable: false,
    secureTextEntry: password,
}))`
    flex: 1;
    padding: 10px 15px;
    background: #eee;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    color: #483D8B;
    font-weight: bold;
`;

export const CredentialContainer = styled.View`
    flex-direction: row;
    margin-bottom: 10px;
`;

export const Copy = styled.TouchableOpacity`
    background: #ddd;
    justify-content: center;
    padding: 0 10px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
`;

export const Menu = styled.TouchableOpacity`
    justify-content: center;
    padding-bottom: 10px;
`;

// export const Password = styled.Text`
//     font-size: 15px;
//     color: #000;
//     margin-bottom: 10px;
// `;
