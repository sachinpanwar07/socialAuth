import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import ProgressBar from '../components/ProgressBar';
import CustomText from '../components/CustomText';
import string from '../constants/string';
import { gender } from '../constants/data';
import Items from '../components/Items';
import GradientButton from '../components/GradientButton';
import imagePath from '../constants/imagePath';
import styles from './styles';
import { AppContext } from '../context/AppContext';

const GenderInfo = ({ navigation }) => {
  const { userInfo, setUserInfo } = useContext(AppContext);

  const handleGenderSelect = (selectedGender) => {
   
    setUserInfo(prev => ({
      ...prev,
      gender: selectedGender,
    }));


    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <ProgressBar progress={90} />
      <CustomText
        children={string.Choose_The_Identity_That}
        textAlign="center"
        fontSize={30}
      />
      <View style={styles.textContainer}>
        <View style={styles.row}>
          <CustomText children={string.Feels_Right} fontSize={24} />
          <CustomText children={string.You} style={styles.youText} />
        </View>
        <Image source={imagePath.ic_youicon} style={styles.youIcon} />
      </View>

      <Items
        data={gender}
        isColumnLayout={false}
        selectedValue={userInfo.gender} 
        type="gender" 
        onPress={handleGenderSelect}
      />

      <GradientButton
        title={string.Continue}
        buttonStyle={styles.btnstyle}
        onPress={() => handleGenderSelect(userInfo.gender)}
      />
    </View>
  );
};

export default GenderInfo;
