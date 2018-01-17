import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react/native';

@inject('store') @observer
class NotificationsTab extends Component {
  static propTypes = {
    store: PropTypes.shape().isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  onChange = () => {
    const { user } = this.props.store;
    const { text } = this.state;
    user.setUserName(text);
  }

  render() {
    return (
      <View>
        <Text>This is the notifications screen.</Text>
      </View>
    );
  }
}

export default NotificationsTab;
