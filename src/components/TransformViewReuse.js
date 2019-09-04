import React from 'react';
import {Text, Animated, Easing} from 'react-native';

class TransfromReuse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transformAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    const anim1 = Animated.timing(this.state.transformAnim, {
      toValue: 1,
      duration: 1000,
    });
    const anim2 = Animated.timing(this.state.transformAnim, {
      toValue: 0,
      duration: 1000,
    });

    const animFinal = Animated.sequence([anim1, anim2]);
    Animated.loop(animFinal).start();
  }

  render() {
    const rotate = this.state.transformAnim.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['15deg', '0deg', '-15deg'],
    });
    return (
      <Animated.View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'green',
          width: 200,
          height: 200,
          transform: [{rotate}, {rotateY: rotate}],
          ...this.props.style,
        }}>
        {this.props.children}
      </Animated.View>
    );
  }
}

export default TransfromReuse;
