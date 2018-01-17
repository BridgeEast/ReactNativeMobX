import React, { Component } from 'react';
import { Text, View, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import PropTypes from 'prop-types';
import I18n from './../config/I18n';

@inject('store') @observer
class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    const { stories, meta, loading } = this.props.store.storyStore;
    return (
      <View>
        <ActivityIndicator
          animating={loading}
          style={[styles.centering, { height: 80 }]}
          size="large"
        />
        <Text>{I18n.t('greeting')}</Text>
        <Text>User: {this.props.store.user.userName}</Text>
        {
          stories.map(story => (
            <View key={story.id}>
              <Text>{story.title}</Text>
            </View>
          ))
        }
        <Button
          title="Go to Second Screen"
          onPress={() => navigate('Second')}
        />
      </View>
    );
  }
}

MainScreen.wrappedComponent.propTypes = {
  navigation: PropTypes.shape().isRequired,
  store: PropTypes.shape().isRequired
};

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});

export default MainScreen;
