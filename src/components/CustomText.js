import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = ({
  children,
  style,
  fontSize = 16,
  fontWeight = 'normal',
  backgroundColor = 'white', 
  textAlign = 'left',
  lineHeight,
  numberOfLines,
  ellipsizeMode = 'tail',
}) => {

  const textColor = backgroundColor === 'white' ? 'black' : 'white';

  return (
    <Text
      style={[
        styles.text,
        {
          fontSize,
          fontWeight,
          color: textColor,
          textAlign,
          lineHeight,
        },
        style,
      ]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    color: 'black',
    textAlign: 'left',
  },
});

export default CustomText;
