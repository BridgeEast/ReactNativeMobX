import React, { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react/native';

@inject('store') @observer
class SecondScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  componentDidMount() {
    this.props.store.storyStore.fetchStories();
  }

  onChange = () => {
    const { user } = this.props.store;
    const { text } = this.state;
    user.setUserName(text);
  }

  render() {
    const { goBack } = this.props.navigation;

    return (
      <View>
        <Text>This is the second screen.</Text>
        <Button
          title="Go back"
          onPress={() => goBack()}
        />
        <View>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
          <Button
            title="Change"
            onPress={this.onChange}
          />
        </View>
      </View>
    );
  }
}

SecondScreen.propTypes = {
  navigation: PropTypes.shape().isRequired,
  store: PropTypes.shape(),
};

export default SecondScreen;
