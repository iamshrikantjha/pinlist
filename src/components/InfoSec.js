import React from 'react'
import { View } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
import InfoSecVal from "./InfoSecVal";

const InfoSec = () => {
    return (
        <>
             {/* InfoSec */}
      <View
        style={{
          backgroundColor: 'white',
          width: wp(90),
          height: hp(10),
          display: 'flex',
          alignSelf: 'center',
          // elevation: hp(0.5),
          marginTop: hp(5),
          flexDirection: 'row',
          borderRadius: 7,
          overflow: 'hidden',
          position: 'absolute',
          justifyContent: 'space-evenly',
        }}>
        <InfoSecVal infov="421" info="Overdue" />
        <InfoSecVal infov="81" info="List" />
        <InfoSecVal infov="72" info="Open" />
        <InfoSecVal infov="51" info="Due" />
      </View>
        </>
    )
}

export default InfoSec
