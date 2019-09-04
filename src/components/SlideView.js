import React from 'react';
import {Text, Animated} from 'react-native';

class SlideView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sildeAnim: new Animated.Value(-1000),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.sildeAnim, {
      toValue: 0,
      duration: 5000,
    }).start();
  }

  render() {
    const marginLeft = this.state.sildeAnim;
    return (
      <Animated.View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
          width: 200,
          height: 200,
          marginLeft,
        }}>
        <Text>SlideView</Text>
      </Animated.View>
    );
  }
}

export default SlideView;
