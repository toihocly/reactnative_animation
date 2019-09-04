import React from 'react';
import {Text, Animated, Easing, View} from 'react-native';

class SideViewMoreAnimationInFristStart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sildeAnim1: new Animated.Value(-1000),
      sildeAnim2: new Animated.Value(-1000),
    };
  }

  componentDidMount() {
    const anim1 = Animated.timing(this.state.sildeAnim1, {
      toValue: 0,
      duration: 4000,
    });
    const anim2 = Animated.timing(this.state.sildeAnim2, {
      toValue: 0,
      duration: 2000,
    });
    Animated.sequence([anim1, anim2]).start();
    // Animated.parallel([anim1, anim2]).start();
    // Animated.stagger(300, [anim1, anim2]).start();
  }

  render() {
    const marginLeft1 = this.state.sildeAnim1;
    const marginLeft2 = this.state.sildeAnim2;
    return (
      <View>
        <Animated.View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
            width: 200,
            height: 200,
            marginLeft: marginLeft1,
            marginBottom: 20,
          }}>
          <Text>SideView 1</Text>
        </Animated.View>
        <Animated.View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'green',
            width: 200,
            height: 200,
            marginLeft: marginLeft2,
          }}>
          <Text>SideView 2</Text>
        </Animated.View>
      </View>
    );
  }
}

export default SideViewMoreAnimationInFristStart;
