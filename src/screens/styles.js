
import { StyleSheet } from "react-native";
import { moderateScale, moderateScaleVertical, textScale } from "../constants/responsive";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: textScale(16),
      justifyContent:"center",
    
    },
    textContainer: {
      alignItems: 'center',
      marginVertical: moderateScaleVertical(10),
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    youText: {
      marginLeft: moderateScale(5),
      fontWeight: 'bold',
      fontSize: 24,
    },
    youIcon: {
      width: moderateScale(60),
      height: moderateScale(10),
      marginTop: moderateScale(5),
      marginLeft: moderateScale(150),
    },
    btnstyle: {
      width: '100%',
      justifyContent:"center",
      alignItems:"center",
      marginLeft:moderateScale(30)
    },
    Namecontainer:{
      flex:1,
      justifyContent:'space-around',
    },
    textInputStyle:{
      justifyContent:"center",
      marginHorizontal:moderateScale(20)
    },
    iconName:{
      marginTop:moderateScale(10),
      marginLeft:moderateScale(300)
    }
  });

  export default styles
  