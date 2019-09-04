import React from 'react';
import {Text, Animated} from 'react-native';

class FadView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 5000,
    }).start();
  }

  render() {
    const opacity = this.state.fadeAnim;
    return (
      <Animated.View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
          width: 200,
          height: 200,
          opacity,
        }}>
        <Text>FadView</Text>
      </Animated.View>
    );
  }
}

export default FadView;
