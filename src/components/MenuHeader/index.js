import React, {useState} from 'react';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

import {MenuStyle} from './styles';

const MenuHeader = () => {

    const [visible, setVisible] = useState(false);
    const navigation = useNavigation();

    const hideMenu = () => setVisible(false);
    const showMenu = () => setVisible(true);

    return (
        <Menu
            visible={visible}
            anchor={
                <MenuStyle onPress={showMenu}>
                    <FontAwesome5 name="ellipsis-h" size={28} style={{marginTop: 4}} color="#fff"/>
                </MenuStyle>
            }
            onRequestClose={hideMenu}
        >
            <MenuItem key="1" onPress={() => {
                hideMenu();
                navigation.navigate("NovaSenha")
            }}>
                Configurações
            </MenuItem>
            <MenuItem key="2" onPress={() => {
                hideMenu()
                navigation.navigate("Backup")
            }}>
                Backup
            </MenuItem>
            <MenuItem key="3" onPress={() => {
                hideMenu();
                navigation.navigate("NovaSenha")
            }}>
                Ajuda
            </MenuItem>
        </Menu>
    );
}

export default MenuHeader;