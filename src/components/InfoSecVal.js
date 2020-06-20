import React from 'react';
import {Text, Image, View} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const InfoSecVal = (props) => {
  return (
    <>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
        <Text
          style={{
            // backgroundColor: 'pink',
            fontFamily: 'Lato-Black',
            fontSize: hp(2.4)
          }}>
          {props.infov}
        </Text>
        <Text
          style={{
            // backgroundColor: 'pink',
            fontFamily: 'Lato-Bold',
            color: 'grey',
            fontSize: hp(1.5),
          }}>
          {props.info}
        </Text>
      </View>
    </>
  );
};

export default InfoSecVal;
