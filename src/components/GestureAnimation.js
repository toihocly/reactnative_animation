import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Animated,
  Dimensions,
  Easing,
} from 'react-native';
import icon from '../assets/images/icon.png';
const {height, width} = Dimensions.get('window');

class GestureAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: null,
      y: null,
      marginLeft: new Animated.Value(0),
      marginTop: new Animated.Value(0),
    };
  }

  onPress = evt => {
    const {locationX, locationY} = evt.nativeEvent;
    console.log(locationX, locationY);
    this.setState({x: locationX, y: locationY});
  };

  onMove = evt => {
    const {locationX, locationY} = evt.nativeEvent;
    const {x, y} = this.state;
    const marginLeft = new Animated.Value(locationX - x);
    const marginTop = new Animated.Value(locationY - y);
    this.setState({marginLeft, marginTop});
    console.log(locationX, locationY);
  };

  onRelease = evt => {
    const anim1 = Animated.timing(this.state.marginLeft, {
      toValue: 0,
      duration: 500,
      easing: Easing.bounce,
    });
    const anim2 = Animated.timing(this.state.marginTop, {
      toValue: 0,
      duration: 500,
      easing: Easing.bounce,
    });
    Animated.parallel([anim1, anim2]).start();
  };

  render() {
    const {marginLeft, marginTop} = this.state;
    return (
      <View
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={this.onPress}
        onResponderMove={this.onMove}
        onResponderRelease={this.onRelease}
        style={{
          flex: 1,
          backgroundColor: 'yellow',
        }}>
        <Animated.Image
          source={icon}
          style={{height: 200, width: 200, marginLeft, marginTop}}
        />
      </View>
    );
  }
}

export default GestureAnimation;
