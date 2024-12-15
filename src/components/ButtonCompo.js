
import React from 'react';
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';

const ButtonCompo = ({
  onPress,
  title,
  imageSource,
  imageStyle,
  buttonStyle,
  titleStyle,
  disabled = false,
  imagePosition = 'left', 
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle, disabled ? styles.disabledButton : null]}
      onPress={onPress}
      disabled={disabled}
      {...props}
    >
      <View style={styles.contentContainer}>
        {imageSource && imagePosition === 'left' && (
          <Image source={imageSource} style={[styles.image, imageStyle]} />
        )}
        {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
        {imageSource && imagePosition === 'right' && (
          <Image source={imageSource} style={[styles.image, imageStyle]} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 30,
    paddingHorizontal: 15,
    marginVertical: 10,
    width:"80%"
  },
  disabledButton: {
    backgroundColor: '#CCCCCC',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"center"
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
  image: {
    width: 25,
    height: 25,
    marginRight: 12,
    resizeMode:'contain',
 
  },
});

export default ButtonCompo;
