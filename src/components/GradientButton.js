import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientButton = ({ 
  title, 
  gradientColors = ['#F7B174', '#F3A8CE'], 
  buttonStyle = {}, 
  textStyle = {}, 
  onPress 
}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.buttonContainer, buttonStyle]} 
      >
        <TouchableOpacity onPress={onPress} style={styles.touchable}>
          <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%', 
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonContainer: {
   
    borderRadius: 30,
    padding: 15, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchable: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', 
    fontSize: 18, 
    fontWeight: 'bold', 
  },
});

export default GradientButton;
