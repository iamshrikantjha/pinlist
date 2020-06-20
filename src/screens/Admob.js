import React from 'react';
import {View} from 'react-native';
import NativeAdView, {
  CallToActionView,
  IconView,
  HeadlineView,
  TaglineView,
  AdvertiserView,
  AdBadge,
} from 'react-native-admob-native-ads';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
//ca-app-pub-3940256099942544~3347511713
const Admob = () => {
  return (
    <>
      {/* <NativeAdView
        style={{
          width: wp(100),
          alignSelf: 'center',
          height: hp(10), // Height should be provided.
        }}
        adUnitID="ca-app-pub-3940256099942544/2247696110" // TEST adUnitID
      >
        <View
          style={{
            height: 100, // could be '100%' too.
            width: '100%',
            backgroundColor: 'white',
          }}>
        </View>
      </NativeAdView> */}
      <NativeAdView
  style={{
    width: "95%",
    alignSelf: "center",
    height: 100, // Height should be provided.
  }}
  adUnitID="ca-app-pub-3940256099942544/2247696110" // TEST adUnitID
>
  <View
    style={{
      height: 100, // could be '100%' too.
      width: "100%",
      backgroundColor: "white",
    }}
  >
  </View>
</NativeAdView>
        
    </>
  );
};

export default Admob;
