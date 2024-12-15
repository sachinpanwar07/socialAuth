import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Text as SvgText, Defs, LinearGradient, Stop } from 'react-native-svg';

const GradientText = ({ text, fontSize = 30 }) => {
  return (
    <View style={styles.container}>
      <Svg height={fontSize * 1.2} width="100%">
        <Defs>
          <LinearGradient id="textGradient" x1="0" x2="1" y1="0" y2="0">
            <Stop offset="0%" stopColor="#F7B174" />
            <Stop offset="100%" stopColor="#F3A8CE" />
          </LinearGradient>
        </Defs>
        <SvgText
          fill="url(#textGradient)"
          fontSize={fontSize}
          fontWeight="bold"
          x="50%"
          y="70%"
          textAnchor="middle">
          {text}
        </SvgText>
      </Svg>
    </View>
  );
};

export default GradientText

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
   
   
  },
});
