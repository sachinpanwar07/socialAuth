import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import imagePath from '../constants/imagePath';
import { AppContext } from '../context/AppContext';
import { moderateScale, moderateScaleVertical, textScale } from '../constants/responsive';
import color from '../constants/color';

const Items = ({ data, isColumnLayout, selectedValue, onPress, type }) => {
  const { userInfo, setUserInfo } = useContext(AppContext);

 
  const handleSelect = (item) => {
    
    if (type === 'age') {
   
      setUserInfo({
        ...userInfo,
        age: item.label, 
      });
    } else if (type === 'gender') {
    
      setUserInfo({
        ...userInfo,
        gender: item.label, 
      });
    }
   
  };

  const renderItem = ({ item }) => {
  
    const isSelected = type === 'age' ? userInfo.age === item.label : userInfo.gender === item.label;

    return (
      <TouchableOpacity
        onPress={() => handleSelect(item)}
        style={isColumnLayout ? styles.columnItemWrapper : styles.rowItemWrapper}
      >
        {isSelected ? (
          <LinearGradient colors={['#F7B174', '#F3A8CE']} style={styles.itemContainer}>
            <Text style={[styles.itemText, { color: '#FFF' }]} numberOfLines={1} ellipsizeMode="tail">
              {item.label}
            </Text>
            <Image source={imagePath.ic_right} style={styles.icon} />
          </LinearGradient>
        ) : (
          <View style={[styles.itemContainer, { backgroundColor: '#f0f0f0' }]}>
            <Text style={[styles.itemText, { color: '#333' }]} numberOfLines={1} ellipsizeMode="tail">
              {item.label}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data || []}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={isColumnLayout ? 2 : 1}
        columnWrapperStyle={isColumnLayout ? styles.columnWrapper : null}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(16),
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: moderateScale(10),
  },
  rowItemWrapper: {
    flex: 1,
    marginVertical: moderateScaleVertical(5),
  },
  columnItemWrapper: {
    flex: 1,
    marginHorizontal: moderateScale(5),
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: moderateScale(30),
    padding: moderateScale(15),
    height: moderateScale(50),
    backgroundColor: "grey",
  },
  icon: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  itemText: {
    fontSize: textScale(16),
    textAlign: 'left',
    flex: 1,
  },
});

export default Items;
