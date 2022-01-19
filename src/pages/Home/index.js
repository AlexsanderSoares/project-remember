import React, {useState} from 'react';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';

import Senha from '../../components/Senha';
import FabButton from '../../components/FabButton';
import MenuHeader from '../../components/MenuHeader';

import { Container, TitleContainer, 
              Menu, VisiblePassword, Title, Form, Input, Submit, List, ListEmpty, ListEmptyText, Image } from './styles';

const Home = ({navigation}) => {

  const [search, setSearch] = useState('');

  const passwords = useSelector(state => state.data);

  function getPasswords(){
      if(search !== '')
        return passwords.filter(password => {
            return password.name.toLowerCase().indexOf(search.toLowerCase()) != -1;
        });

      return passwords;
  }

  return (
      <Container>
        <TitleContainer>
          <Title>
            Minhas Senhas
          </Title>
          <MenuHeader/>
        </TitleContainer>
        <Form>
            <Submit>
              <IconFontAwesome name="search" size={22} color="#999"/>
            </Submit>
            <Input 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Procurar por senha"
                onChangeText={search => setSearch(search)}
            />
        </Form>

        <List
          keyboardShouldPersistTaps="handled"
          data={getPasswords()}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <Senha data={item}/>
          )}
          ListEmptyComponent={
              <ListEmpty>
                  <Image source={require("../../assets/empty_list.png")}/>
                  <ListEmptyText>
                      {search === '' ? "Nenhuma senha cadastrada até o momento" : "Nenhuma senha encontrada"}
                  </ListEmptyText>
              </ListEmpty>
          }
        />
        <FabButton navigation={navigation}/>
      </Container>
  );
}

export default Home;