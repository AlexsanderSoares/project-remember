import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Container, Button } from './styles';

const FabButton = (props) => {
  return (
        <Container>
            <Button onPress={() => props.navigation.navigate('NovaSenha')}>
                <MaterialIcons name="add" size={30} color="#fff"/>
            </Button>
        </Container>  
  );
}

export default FabButton;