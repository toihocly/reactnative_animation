import React from 'react';
import {View, Animated, Dimensions, Easing, Image} from 'react-native';
import h1 from '../assets/images/h1.jpg';
import h2 from '../assets/images/h2.jpeg';
import h3 from '../assets/images/h3.jpg';
import h4 from '../assets/images/h4.jpg';
import h5 from '../assets/images/h5.png';
import h6 from '../assets/images/h6.png';
import h7 from '../assets/images/h7.jpg';
import h8 from '../assets/images/h8.jpg';
import h9 from '../assets/images/h9.png';
import h10 from '../assets/images/h10.jpg';
import h11 from '../assets/images/h11.jpg';
import hand from '../assets/images/hand.jpg';
const {height: heightScreen, width: widthScreen} = Dimensions.get('window');

const Images = [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11];
class GestureAnimationRotate extends React.Component {
  constructor(props) {
    super(props);
    this.xLoop = null;
    this.state = {
      x: null,
      y: null,
      rotate: new Animated.Value(0),
      opacity: new Animated.Value(0),
      imageIndex: 0,
      time: new Animated.Value(0),
      endAnimation: false,
    };
  }

  componentDidMount() {
    const anim1 = Animated.timing(this.state.time, {
      toValue: 2,
      duration: 1000,
      easing: Easing.ease,
    });

    this.xLoop = Animated.loop(anim1).start();
  }

  onPress = evt => {
    const {locationX, locationY} = evt.nativeEvent;
    console.log(locationX, locationY);
    this.setState({x: locationX, y: locationY});
  };

  onMove = evt => {
    const {locationX, locationY} = evt.nativeEvent;
    const {x, y} = this.state;
    const rotate = new Animated.Value((1.5 * (locationX - x)) / widthScreen);
    if (!this.state.endAnimation) {
      this.setState({time: new Animated.Value(2), endAnimation: true});
      this.state.time.stopAnimation();
    }
    if ((1.5 * (locationX - x)) / widthScreen > 1) {
      this.setState({
        imageIndex: (this.state.imageIndex + 1) % 11,
        x: locationX,
        y: locationY,
      });
    }
    if ((1.5 * (locationX - x)) / widthScreen < -1) {
      this.setState({
        imageIndex: (this.state.imageIndex - 1 + 11) % 11,
        x: locationX,
        y: locationY,
      });
    }
    this.setState({rotate});
  };

  onRelease = evt => {
    Animated.timing(this.state.rotate, {
      toValue: 0,
      duration: 500,
      easing: Easing.ease,
    }).start();
  };

  render() {
    const rotate = this.state.rotate.interpolate({
      inputRange: [-1, 1],
      outputRange: ['-30deg', '30deg'],
    });
    const opacity = this.state.rotate.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [0, 1, 0],
    });
    return (
      <View
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={this.onPress}
        onResponderMove={this.onMove}
        onResponderRelease={this.onRelease}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'yellow',
        }}>
        {/* <Animated.Image
          source={require('../assets/images/background.jpg')}
          style={{
            // width: widthScreen,
            // height: heightScreen,
            position: 'absolute',
            flex: 1,
            height: null,
            width: null,
            sizeMode: 'center',
          }}
        /> */}

        <Image
          source={require('../assets/images/background.jpg')}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            flex: 1,
            resizeMode: 'stretch',
          }}
        />
        <Animated.Image
          source={require('../assets/images/logo.png')}
          style={{
            position: 'absolute',
            left: 30,
            top: this.state.time.interpolate({
              inputRange: [0, 0.5, 2],
              outputRange: [-30, 5, 5],
            }),
            height: 100,
            width: (widthScreen * 80) / 100,
            resizeMode: 'center',
          }}
        />
        <Animated.Image
          source={require('../assets/images/back.png')}
          style={{
            position: 'absolute',
            left: this.state.time.interpolate({
              inputRange: [0, 1],
              outputRange: [30, 20],
            }),
            opacity: this.state.time.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [1, 0.5, 0],
            }),
            top: 60,
            height: 50,
            width: 50,
            resizeMode: 'center',
            transform: [
              {
                rotate: this.state.time.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '-30deg'],
                }),
              },
            ],
          }}
        />
        <Animated.Image
          source={require('../assets/images/forward.png')}
          style={{
            position: 'absolute',
            right: this.state.time.interpolate({
              inputRange: [0, 1],
              outputRange: [30, 20],
            }),
            opacity: this.state.time.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [1, 0.5, 0],
            }),
            top: 60,
            height: 50,
            width: 50,
            resizeMode: 'center',
            transform: [
              {
                rotate: this.state.time.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '30deg'],
                }),
              },
            ],
          }}
        />
        <Animated.Image
          source={Images[this.state.imageIndex]}
          style={{
            height: 300,
            width: 300,
            opacity,
            transform: [{rotate}],
            borderRadius: 10,
            resizeMode: 'stretch',
          }}
        />
      </View>
    );
  }
}

export default GestureAnimationRotate;
