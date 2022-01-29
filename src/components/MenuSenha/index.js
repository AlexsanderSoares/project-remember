import React, {useState} from 'react';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';

import {MenuStyle} from './styles';

const MenuSenha = (props) => {

    const [visible, setVisible] = useState(false);
    const navigation = useNavigation();

    const hideMenu = () => setVisible(false);
    const showMenu = () => setVisible(true);

    const dispatch = useDispatch();

    const deletePassword = async () => {

        dispatch({ type: "REMOVE_PASSWORD", id: props.senha.id });

        Toast.show({
            type: 'success',
            text1: "A senha foi excluida",
            position: 'bottom',
            visibilityTime: 1500,
        });

        navigation.navigate("Home");
    }

    return (
        <Menu
            visible={visible}
            anchor={
                <MenuStyle onPress={showMenu}>
                    <FontAwesome5 name="ellipsis-v" size={18} style={{marginTop: 0, paddingHorizontal: 5}} color="#000"/>
                </MenuStyle>
            }
            onRequestClose={hideMenu}
        >
            <MenuItem key="1" onPress={() => {
                hideMenu();
                navigation.navigate('NovaSenha', {password_id: props.senha.id});
            }}>
                Alterar
            </MenuItem>
            <MenuItem key="2" onPress={deletePassword}>
                Excluir
            </MenuItem>
        </Menu>
    );
}

export default MenuSenha;