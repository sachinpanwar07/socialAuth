import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import {AppContext} from '../context/AppContext';
import GradientButton from '../components/GradientButton';
import imagePath from '../constants/imagePath';
import {moderateScale, moderateScaleVertical} from '../constants/responsive';
const ProfileScreen = ({navigation}) => {
  const {userInfo, setUserInfo} = useContext(AppContext);
  const {name, email, gender, age, photo} = userInfo;
  const userData = [
    {label: 'Name', value: name || 'Not provided'},
    {label: 'Email', value: email || 'Not provided'},
    {label: 'Gender', value: gender || 'Not provided'},
    {label: 'Age', value: age || 'Not provided'},
  ];

  const signOut = () => {
    setUserInfo({
      name: '',
      email: '',
      gender: '',
      age: '',
      photo: '',
    });
    navigation.navigate('socialAuth');
  };

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.textLabel}>{item.label}:</Text>
      <Text style={styles.textValue}>{item.value}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.imageWrapper}>
          <Image
            source={photo ? {uri: photo} : imagePath.ic_apple}
            style={styles.profileImage}
          />
        </View>
      </View>

      <FlatList
        data={userData}
        renderItem={renderItem}
        keyExtractor={item => item.label}
        contentContainerStyle={styles.listContainer}
      />

      <GradientButton
        title="Sign Out"
        onPress={signOut}
        buttonStyle={styles.buttonStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(20),
    backgroundColor: '#fff',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: moderateScale(20),
  },
  imageWrapper: {
    width: moderateScale(120),
    height: moderateScale(120),
    borderRadius: moderateScale(60),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    borderWidth: 5,
    borderColor: 'rgba(255, 182, 193, 0.5)', // Light gradient effect
  },
  profileImage: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
  },
  listContainer: {
    marginTop: moderateScale(10),
  },
  itemContainer: {
    marginBottom: moderateScale(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10),
  },
  textLabel: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: '#333',
  },
  textValue: {
    fontSize: moderateScale(16),
    color: '#666',
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: moderateScale(30),
    alignSelf: 'center',
    width: '100%',
    marginLeft: moderateScale(30),
  },
});

export default ProfileScreen;
