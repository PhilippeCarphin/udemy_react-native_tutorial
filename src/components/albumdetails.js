import React from 'react';
import { Text } from 'react-native';
import Card from './card';
import CardSection from './cardsection';

const AlbumDetails = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
      <Text>Not in CardSection</Text>
    </Card>
  );
};

export default AlbumDetails;
