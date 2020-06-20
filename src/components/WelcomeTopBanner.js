import React from 'react';
import {Text, Image, View} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const WelcomeTopBanner = (props) => {
    return (
        <>
            {/* TopBanner */}
      <View style={{
        // backgroundColor: 'pink',
        width: wp(90),
        height: hp(15),
        display: "flex",
        alignSelf: "center",
        elevation: hp(10),
        marginTop: hp(7),
        flexDirection: "row",
        borderRadius: 7,
        overflow: "hidden",
        position: "absolute"
      }}>
        
        {/* Text */}
        <Text style={{
          // color: '#9CD429',
          fontFamily: 'Lato-Black',
          backgroundColor: 'white',
          fontSize: hp(3),
          width: wp(40),
          // paddingLeft: wp(5),
          // backgroundColor: 'pink',
          justifyContent: "center",
          alignItems: "center",
          textAlign: 'center',
          textAlignVertical: "center",
        }}>
          {props.title}
        </Text>

        {/* Image */}
        <Image
        source={require('./../../assets/images/ex2.jpg')}
        style={{
          width: wp(50),
          height: null,
          padding: wp(5),
          
        }}
      />
      </View>
        </>
    )
}

export default WelcomeTopBanner
