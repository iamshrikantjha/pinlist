import React, { useState } from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import {Switch} from 'react-native-paper';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const OptionCard = (props) => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const onToggleSwitch = () => {
      setIsSwitchOn(!isSwitchOn);
      console.log(isSwitchOn);
    }
  return (
    <>
      {/* Options Card */}
      <View
        style={{
          width: wp(70),
          marginTop: hp(3),
          // backgroundColor: 'pink',
          height: hp(5),
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'Lato-Italic',
          }}>
          {props.title}
        </Text>
        <Switch
          value={isSwitchOn}
          onValueChange={onToggleSwitch}
          color={'black'}
          style={
            {
              // backgroundColor: 'red'
            }
          }
        />
      </View>
    </>
  );
};

export default OptionCard;
