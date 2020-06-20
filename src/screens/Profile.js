import React from 'react';
import {View} from 'react-native';
import { Avatar } from 'react-native-paper';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Profile = () => {
  return (
    <>
      <View
        style={{
          // backgroundColor: '#9CD429',
          backgroundColor: 'teal',
          height: hp(20),
        }}></View>
        {/* Avatar */}
        <Avatar.Icon size={hp(15)} color={'teal'} icon="amazon" style={{
          position: 'absolute',
          alignSelf: 'center',
          marginTop: hp(13),
          backgroundColor: 'white',
          borderWidth: hp(0.1),
          elevation: hp(10),
          borderColor: 'teal'
        }} />
        {/* <WelcomeTopBanner title={'Profile'} /> */}
    </>
  );
};

export default Profile;

