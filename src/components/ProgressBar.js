import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
const ProgressBar = ({progress}) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  return (
    <View style={styles.container}>
      <View style={styles.progressBackground}>
        <LinearGradient
          colors={['#F7B174', '#F3A8CE']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={[styles.progressForeground, {width: `${clampedProgress}%`}]}
        />
      </View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
  },
  progressBackground: {
    height: 10,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressForeground: {
    height: '100%',
    borderRadius: 10,
  },
});
