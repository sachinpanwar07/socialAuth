import {Alert, StyleSheet, Text, View,Image} from 'react-native';
import React, {useContext, useState} from 'react';
import ProgressBar from '../components/ProgressBar';
import GradientText from '../components/GradientText';
import string from '../constants/string';
import CustomText from '../components/CustomText';
import color from '../constants/color';
import TextInputCompo from '../components/TextInputCompo';
import ButtonCompo from '../components/ButtonCompo';
import {Line} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import GradientButton from '../components/GradientButton';
import {AppContext} from '../context/AppContext';
import imagePath from '../constants/imagePath';
import styles from './styles';
const NameScreen = ({navigation}) => {
  const {userInfo, setUserInfo} = useContext(AppContext);
  const [name, setName] = useState();
  const handleName = () => {
    if (name.trim()) {
      setUserInfo({...userInfo, name});
      navigation.navigate('bdayInfo');
    } else {
      Alert.alert('Please enter your name');
    }
  };
  return (
    <View style={styles.Namecontainer}>
    
     <ProgressBar progress={20} 
      />
  
      <View style={{}}>
        <CustomText
          children={string.Lets_Get_Know}
          textAlign="center"
          fontSize={26}
        />
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CustomText
            value={name}
            children={string.What}
            style={{color: 'pink'}}
            fontSize={26}
          />
          <CustomText children={string.Should_We_Call}
          fontSize={26}
          />
          <CustomText children={string.You} style={{fontWeight: 'bold'}} 
           fontSize={26}
          />
         
        </View>
        <Image source={imagePath.ic_youicon} style={[styles.youIcon,styles.iconName]} />
      </View>

      <TextInputCompo
        placeholder={string.Name}
        style={styles.textInputStyle}
        onChangeText={setName}
      />
      <GradientButton
        title={string.Continue}
        buttonStyle={styles.btnstyle}
        onPress={handleName}
      />
    </View>
  );
};

export default NameScreen;
