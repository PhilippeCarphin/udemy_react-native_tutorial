import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './card';
import CardSection from './cardsection';

const AlbumDetails = (props) => {
  return (
    <Card>
      <CardSection>
        <View>
          <Image style={styles.thumbnailStyle} source={{ uri: props.album.thumbnail_image }} />
        </View>
        <View style={styles.headerContentStyle}>
          <Text>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }
};

export default AlbumDetails;
