import React, {useState} from 'react';
import {Alert, Keyboard, Modal} from 'react-native';
import {ModalContainer,RequestPasswordContainer, InputContainer, InputPassword, OtherOption, OtherOptionText, GoBackButtonContainer, CenterContainer} from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const RequestPassword = ({showBackButton = false}) => {

    const [visibleModal, setVisibleModal] = useState(true);
    const [password, setPassword] = useState("");

    const [passwordUse, setPasswordUse] = useState(true);

    const navigation = useNavigation();

    return (
        <Modal
            animationType='none'
            transparent={true}
            visible={visibleModal}
            onRequestClose={() => navigation.goBack(null)}
        >
            <ModalContainer>
                {showBackButton &&
                     <GoBackButtonContainer onPress={() => navigation.goBack(null)}>
                        <Ionicons name="arrow-back" size={25} color="#fff"/>
                    </GoBackButtonContainer>
                }
                <CenterContainer>
                    <RequestPasswordContainer>
                        <InputContainer>
                            {passwordUse ?
                                    <>
                                        <MaterialIcons name="lock-outline" color="#fff" size={90}/>
                                        <InputPassword value={password} maxLength={4} placeholder="Senha do aplicativo" onChangeText={password => setPassword(password.replace(/[^0-9]/g, ''))} />
                                    </>
                                :
                                    null
                            }
                            <OtherOption onPress={() => setPasswordUse(!passwordUse)}>
                                {passwordUse ?
                                    <OtherOptionText>
                                        Ou entre com pergunta de segurança <FontAwesome5 name="chevron-circle-right" color="#fff" size={12}/>
                                    </OtherOptionText>
                                    :
                                    <OtherOptionText>
                                        Ou entre com a senha do aplicativo <FontAwesome5 name="chevron-circle-right" color="#fff" size={12}/>
                                    </OtherOptionText>
                                }
                            </OtherOption>
                        </InputContainer>
                    </RequestPasswordContainer>
                </CenterContainer>
            </ModalContainer>
        </Modal>
    );
}

export default RequestPassword;