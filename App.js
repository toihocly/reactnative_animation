import React from 'react';
import {View, Text} from 'react-native';
import FadView from './src/components/FadeView';
import SlideView from './src/components/SlideView';
import SideViewMoreAnimationInFristStart from './src/components/SideViewMoreAnimationInFristStart';
import TransformView from './src/components/TransformView';
import TransfromReuse from './src/components/TransformViewReuse';
import Final1 from './src/components/Final1';
import GestureAnimation from './src/components/GestureAnimation';
import GestureAnimationRotate from './src/components/GestureAnimationRotate';

class App extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'stretch',
          backgroundColor: 'lightblue',
        }}>
        {/* <FadView /> */}
        {/* <SlideView /> */}
        {/* <SideViewMoreAnimationInFristStart /> */}
        {/* <TransformView /> */}
        {/* <TransfromReuse style={{height: 50}}>
          <Text style={{color: '#fff'}}>Transform View Reuse</Text>
        </TransfromReuse> */}
        {/* <Final1 /> */}
        <GestureAnimationRotate />
      </View>
    );
  }
}

export default App;
