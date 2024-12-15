import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { AppContext } from '../context/AppContext';
import ProgressBar from '../components/ProgressBar';
import GradientText from '../components/GradientText';
import CustomText from '../components/CustomText';
import ButtonCompo from '../components/ButtonCompo';
import imagePath from '../constants/imagePath';
import LinearGradient from 'react-native-linear-gradient';
import string from '../constants/string';
import { useNavigation } from '@react-navigation/native';
const SocialAuth = () => {
  const navigation = useNavigation();
  const { setUserInfo } = useContext(AppContext); 
  const [userdetails, setUserDetails] = useState(null);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '448598892892-m7616murlls5gn33221s6nighj4090vc.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices(); 
      const userInfo = await GoogleSignin.signIn(); 
      console.log('Google User Info:', userInfo); 
  
     
        setUserDetails(userInfo); 
        setUserInfo({ 
          name: userInfo.data.user.name, 
          email: userInfo.data.user.email, 
          accessToken: userInfo.data.idToken,
          photo:userInfo.data.user.photo,
          googleId:userInfo.data.user.id
        });
        navigation.navigate('Name');
     
    } catch (error) {
      console.error('Google Sign-In Error:', error); 
      let message = 'An unknown error occurred.';
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        message = 'You cancelled the Google Sign-In process.';
      } else if (error.code === statusCodes.IN_PROGRESS) {
        message = 'Google Sign-In is already in progress.';
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        message = 'Google Play services are not available.';
      }
    
    }
  };
  

  return (
    <View style={styles.container}>
      <ProgressBar progress={40} />
      <View>
        <GradientText text={string.Begin_Your_Journey} />
        <GradientText text={string.Midfull} />
        <CustomText
          children={string.Log_In_OR_Sign}
          textAlign="center"
          style={{ color: 'gray', textAlign: 'center' }}
        />
      </View>

      <LinearGradient colors={['#F7B174', '#F3A8CE']} style={styles.buttonContainer}>
        <ButtonCompo
          title={string.Continue_with_Apple}
          imageSource={imagePath.ic_apple}
          buttonStyle={{ backgroundColor: 'black' }}
        />

        <ButtonCompo
          title={string.Continue_with_Google}
          imageSource={imagePath.ic_google}
          titleStyle={{ color: 'black' }}
          onPress={handleGoogleSignIn} 
        />

        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.orText}>{string.Or}</Text>
          <View style={styles.divider} />
        </View>
        <View style={{ flexDirection: 'row', gap: 2 }}>
          <Text style={styles.termConditionText}> I agree to </Text>
          <Text style={styles.privacyText}>{string.Privacy}</Text>
          <Text style={styles.termConditionText}>&</Text>
          <Text style={styles.privacyText}> {string.Term}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 300,
    width: '100%',
    paddingHorizontal: 20,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
    justifyContent: 'center',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: 'white',
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: 'white',
  },
  termConditionText: {
    color: 'white',
    fontSize: 14,
  },
  privacyText: {
    color: 'white',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});

export default SocialAuth;
