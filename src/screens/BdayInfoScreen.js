import React, { useContext } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import ProgressBar from '../components/ProgressBar';
import CustomText from '../components/CustomText';
import string from '../constants/string';
import GradientButton from '../components/GradientButton';
import Items from '../components/Items';
import { ageCategories } from '../constants/data';
import { AppContext } from '../context/AppContext';
import imagePath from '../constants/imagePath';
import styles from './styles';
import { textScale } from '../constants/responsive';

const BdayInfoScreen = ({ navigation, onNext }) => {
  const { userInfo, setUserInfo } = useContext(AppContext);

  const handleAgeCategorySelect = (selectedAgeCategory) => {
  
    setUserInfo(prev => ({
      ...prev,
      age: selectedAgeCategory,
    }));
  
    navigation.navigate('genderInfo');
  };

  return (
    <View style={styles.container}>
      <ProgressBar progress={60} />
      <CustomText
        children={string.Been_this_World}
        textAlign="center"
        fontSize={textScale(30)}
      />
      <View style={styles.textContainer}>
        <View style={styles.row}>
          <CustomText children={string.World} fontSize={24} />
        </View>
      </View>

      <Items
        data={ageCategories}
        isColumnLayout={true}
        selectedValue={userInfo.age} 
        type="age" 
        onPress={handleAgeCategorySelect}
      />

      <GradientButton
        title={string.Continue}
        buttonStyle={styles.btnstyle}
        onPress={() => handleAgeCategorySelect(userInfo.age)}
      />
    </View>
  );
};

export default BdayInfoScreen;
