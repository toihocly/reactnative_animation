import React from 'react';
import {View, Text, ImageBackground, Animated, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

class Final1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.time, {
      toValue: 2,
      duration: 2000,
    }).start();
  }

  render() {
    const opacity = this.state.time.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 1, 1],
    });

    const top = this.state.time.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [-100, 25, 25],
    });

    const left = this.state.time.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [-1000, -1000, 10],
    });

    return (
      <Animated.View style={{flex: 1, height, width, opacity}}>
        <ImageBackground
          style={{height, width}}
          source={require('../assets/images/slider1.jpg')}>
          <Animated.Text
            style={{
              position: 'absolute',
              left: 25,
              top,
              color: '#fff',
              fontSize: 40,
            }}>
            Final1
          </Animated.Text>
          <Animated.Text
            style={{
              position: 'absolute',
              bottom: 30,
              left,
              color: '#ff4435',
              fontSize: 60,
            }}>
            League of Legends
          </Animated.Text>
        </ImageBackground>
      </Animated.View>
    );
  }
}

export default Final1;
