import React from 'react';
import {withNavigation} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, List, Item, Label} from './styles';

function Menu({translateY, navigation}) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [-200, 0],
          outputRange: [1, 0],
        }),
      }}>
      <List>
        <Item>
          <Icon name="format-align-left" size={32} color="#FFF" />
          <Label>Notícias</Label>
        </Item>

        <Item>
          <Icon name="show-chart" size={32} color="#FFF" />
          <Label>Estatísticas</Label>
        </Item>

        <Item onPress={() => {navigation.navigate('Maps')}}>
          <Icon name="people" size={32} color="#FFF" />
          <Label>Encontrar ONGs</Label>
        </Item>

        <Item>
          <Icon name="my-location" size={32} color="#FFF" />
          <Label>Localização</Label>
        </Item>

        <Item>
          <Icon name="person-add" size={32} color="#FFF" />
          <Label>Convidar amigos</Label>
        </Item>
      </List>
    </Container>
  );
}

export default withNavigation(Menu);