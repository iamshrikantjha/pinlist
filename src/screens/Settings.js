import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import WelcomeTopBanner from '../components/WelcomeTopBanner';
import OptionCard from '../components/OptionCard';

const Settings = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    console.log(isSwitchOn);
  }

  return (
    <>
      <View
        style={{
          // backgroundColor: '#9CD429',
          backgroundColor: 'red',
          height: hp(15),
        }}></View>
      <WelcomeTopBanner title={'Settings'} />

      {/* Lower Card */}
      <View
        style={{
          // backgroundColor: 'pink',
          width: wp(100),
          // height: hp(70),
          flex: 1,
          justifyContent: 'center',
          alignItems: "center",
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: wp(90),
            height: hp(50),
            elevation: hp(10),
            borderRadius: 7,
            marginTop: hp(5),
            // justifyContent: 'center',
            // alignSelf: "center",
            alignItems: "center",
          }}>

            <OptionCard title={'Enable Dark Theme'} />
            <OptionCard title={'Option 1'} />
            <OptionCard title={'Option 2'} />
            <OptionCard title={'Option 3'} />
            <OptionCard title={'Option 4'} />


          </View>
      </View>
    </>
  );
};

export default Settings;
