import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { history, historyAddListen } from './routerHistory';
import { historyRemoveListen } from '../tinyNavigation';

export interface IItemProps {
  style?: React.CSSProperties;
  title?: string;
  onPress?: Function;
  path?: string;
  state?: any;
  component?: Function;
  componentSelected?: Function;
}

class TabBarItem extends React.PureComponent<IItemProps, object> {
  listener: number;
  constructor(props: IItemProps) {
    super(props);
    this.listener = historyAddListen(this.changeSelected)
  }
  componentWillUnmount() {
    historyRemoveListen(this.listener)
  }
  changeSelected = (h: any, e: any) => {
    console.log(h, e);
  }
  handleOnPress = () => {
    if (this.props.onPress) {
      this.props.onPress();
    }
    if (this.props.path) {
      history.push(this.props.path, this.props.state);
    }
  };
  render() {
    return (
      <TouchableOpacity style={ssc.item} onPress={this.handleOnPress}>
        {this.props.title && <Text>{this.props.title}</Text>}
        {this.props.component && this.props.component()}
        {this.props.componentSelected && this.props.componentSelected()}
      </TouchableOpacity>
    );
  }
}

interface IProps {
  isIPhoneX?: boolean;
  items: Array<IItemProps>;
}

class TabBar extends React.PureComponent<IProps, object> {
  render() {
    return (
      <View
        style={[
          ssc.container,
          {
            maxHeight: !this.props.isIPhoneX ? 48 : 60,
            minHeight: !this.props.isIPhoneX ? 48 : 60,
            paddingBottom: !this.props.isIPhoneX ? 0 : 22,
          },
        ]}
      >
        {this.props.items.map((v, i) => {
          return <TabBarItem key={v.title} {...v} />;
        })}
      </View>
    );
  }
}

const ssc = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 48,
    minHeight: 48,
    width: '100%',
    backgroundColor: '#f3f3f3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item: {
    flex: 1,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default TabBar;
