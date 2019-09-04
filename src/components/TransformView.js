import React from 'react';
import {Text, Animated} from 'react-native';

class TransformView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    const anim1 = Animated.timing(this.state.colorAnim, {
      toValue: 1,
      duration: 1000,
    });

    Animated.loop(anim1).start();
  }

  render() {
    const backgroundColor = this.state.colorAnim.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['green', 'red', 'yellow'],
    });
    return (
      <Animated.View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor,
          width: 200,
          height: 200,
        }}>
        <Text>TransformView</Text>
      </Animated.View>
    );
  }
}

export default TransformView;
