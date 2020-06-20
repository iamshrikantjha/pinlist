import React, {useContext} from 'react';
import {Text, Share, TouchableOpacity, View} from 'react-native';
import { NavigationContext } from '@react-navigation/core';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import Snackbar from 'react-native-paper';

import {Context} from './../context/TodoContext';

const ItemCard = (props) => {
  // const { navigate } = props.navigation
  // const navigation = {props}
  const {deleteTodo} = useContext(Context);
  // const [visible, setVisible] = React.useState(false);

  const navigation = useContext(NavigationContext);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          // 'React Native | A framework for building native apps using React',
          `${props.content} ${props.quantity}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <View
        style={{
          width: wp(90),
          height: hp(13),
          backgroundColor: 'white',
          borderRadius: 7,
          marginTop: hp(0.8),
          marginBottom: hp(0.8),
          //   elevation: 2,
          overflow: 'hidden',
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
        {/* Left Attach  */}
        <View
          style={{
            backgroundColor: `${props.color}`,
            //    backgroundColor: '#9CD429',
            flex: 1,
            height: hp(15),
            width: wp(1.5),
          }}></View>

        {/* Body */}
        <View
          style={{
            // backgroundColor: 'yellow',
            // flex: 9,
            width: wp(88.5),
            height: hp(13),
            flexDirection: 'column',
          }}>
          {/* Top Block */}
          <View
            style={{
              flexDirection: 'row',
              margin: wp(3),
              // backgroundColor: 'pink',
            }}>
            <FontAwesome5
              name="database"
              color={'grey'}
              size={hp(1.3)}
              style={{
                // backgroundColor: 'red',
                alignSelf: 'center',
                // marginTop: wp(1),
              }}
            />
            <Text
              style={{
                // backgroundColor: 'pink',
                fontFamily: 'Lato-Black',
                fontSize: hp(1.3),
                paddingLeft: wp(2),
                // marginBottom: wp(2),
                color: 'grey',
                textAlignVertical: 'center',
              }}>
              Assets
            </Text>
          </View>

          {/* Right Block */}
          <View></View>

          {/* Lower Body */}
          <Text
            style={{
              // backgroundColor: 'pink',
              fontFamily: 'Lato-Medium',
              fontSize: hp(2),
              paddingRight: wp(3),
              paddingLeft: wp(3),
            }}>
            {props.content}
          </Text>

          {/* Bottom Section Left*/}
          <View
            style={{
              // backgroundColor: 'pink',
              flexDirection: 'row',
              alignItems: 'center',
              margin: wp(3),
            }}>
            <FontAwesome
              name="shopping-basket"
              color={'#4d4d4d'}
              size={hp(1.8)}
              style={
                {
                  // backgroundColor: 'red',
                  // alignSelf: 'center',
                  // marginTop: wp(1),
                }
              }
            />
            <Entypo
              name="cross"
              color={'#4d4d4d'}
              size={hp(1.8)}
              style={
                {
                  // backgroundColor: 'red',
                  // alignSelf: 'center',
                  // marginTop: wp(1),
                }
              }
            />
            <Text
              style={{
                // backgroundColor: 'pink',
                fontFamily: 'Lato-Black',
                fontSize: hp(1.8),
                paddingLeft: wp(2),
                // marginBottom: wp(2),
                // color: 'grey',
                color: '#4d4d4d',
                textAlignVertical: 'center',
              }}>
              {props.quantity}
            </Text>

            <FontAwesome
              name="rupee"
              color={'#4d4d4d'}
              size={hp(1.8)}
              style={{
                // backgroundColor: 'red',
                // alignSelf: 'center',
                // marginTop: wp(1),
                marginLeft: wp(20),
              }}
            />
            <Text
              style={{
                // backgroundColor: 'pink',
                fontFamily: 'Lato-Black',
                fontSize: hp(1.8),
                paddingLeft: wp(2),
                // marginBottom: wp(2),
                // color: 'grey',
                color: '#4d4d4d',
                textAlignVertical: 'center',
              }}>
              {props.price * props.quantity}
            </Text>
          </View>

          <View
            style={{
              // backgroundColor: 'pink',
              position: 'absolute',
              flexDirection: 'row',
              alignSelf: 'flex-end',
              marginTop: hp(2.5),
            }}>
            <TouchableOpacity onPress={() => onShare()}>
              <FontAwesome5
                name="share-alt"
                color={'black'}
                size={hp(2.5)}
                style={{
                  margin: wp(4),
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={
                async () =>
                  // console.log(`${props.id}`)
                  await deleteTodo(props.id)
                // setVisible(!visible)
              }>
              <MaterialIcons
                name="done-all"
                color={'black'}
                size={hp(3)}
                style={{
                  margin: wp(4),
                  marginLeft: wp(5),
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default ItemCard;


