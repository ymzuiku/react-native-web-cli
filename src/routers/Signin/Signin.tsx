import * as React from 'react';
import { View, Text } from 'react-native';
import { NaviRoute } from '../../tinyNavigation';

interface IProps {
  style?: React.CSSProperties;
}

export default class extends React.PureComponent<IProps, object> {
  render() {
    return (
      <View>
        <Text>signin</Text>
      </View>
    );
  }
}
