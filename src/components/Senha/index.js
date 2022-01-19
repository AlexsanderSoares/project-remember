import React, {useState} from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Clipboard from '@react-native-community/clipboard';
import Toast from 'react-native-toast-message';

import { Container, 
          MenuContainer, 
          Menu, Name, 
          Credential,
           Description, 
           CredentialContainer, Copy, VisiblePassword, OptionsContainer, Label } from './styles';

import MenuSenha from '../MenuSenha';

const Senha = ({ data }) => {

  const copyToClipboard = (text, ) => {
      Clipboard.setString(text);

      Toast.show({
        type: 'success',
        text1: "Copiado para área de transferencia",
        position: 'bottom',
        visibilityTime: 1000,
      });
  }

  const [passVisible, setPassVisible] = useState(false);

  return (
      <Container>
          <MenuContainer>
              <Name>
                    {data.name}
              </Name>
              <OptionsContainer>
                <VisiblePassword onPress={() => setPassVisible(!passVisible)}>
                    <FontAwesome name={passVisible ? "eye-slash" : "eye"} size={18} color="#000" />
                </VisiblePassword>
                <MenuSenha senha={data} />
              </OptionsContainer>
          </MenuContainer>
          <Description>
                {data.description || "Sem descrição"} 
          </Description>
          <Label>
                Usuário
          </Label>
          <CredentialContainer>
            <Credential>
                {data.user || "Usuário não informado"}
            </Credential>
            {!!data.user && 
                <Copy onPress={() => copyToClipboard(data.user)}>
                  <MaterialIcon name="content-copy" size={22} color="#483D8B"/>
                </Copy>
            }
          </CredentialContainer>
          <Label>
                Senha
          </Label>
          <CredentialContainer>
            <Credential password={!passVisible}>
                {data.password}
            </Credential>
            <Copy onPress={() => copyToClipboard(data.password)}>
               <MaterialIcon name="content-copy" size={22} color="#483D8B"/>
            </Copy>
          </CredentialContainer>
      </Container>
  );
}

export default Senha;