import React, {useState, useContext} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {Context as TodoContext} from './../context/TodoContext';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {addTodoAsync} from './../storedb/AsyncStorageDB';

const CreateTodo = (props) => {
  // const [id, setId] = useState(null);
  const [content, setContent] = useState(null);
  // const [content, setContent] = useState(null)
  const [price, setPrice] = useState(null);
  const [quantity, setQuant] = useState(null);
  const [color, setColor] = useState('#9CD429');
  const arrCo = [
    'red',
    'green',
    'teal',
    'yellow',
    'red',
    'black',
    'brown',
    'skyblue',
    'blue',
    '#9CD429',
    'orange',
    'purple',
  ];

  const reset = async () => {
    await Promise[(setContent(null), setPrice(null), setQuant(null))];
  };

  const redirect = async () => {
    // await Promise[(setId(''), setId(Math.floor(Math.random() * 99999)))];

    // console.log(id);

    await Promise[setColor(arrCo[Math.floor(Math.random() * arrCo.length)])];
    // await addTodoAsync(id, content, quantity, price, color);
    await addTodo(content, quantity, price, color);
    await reset();
    props.navigation.navigate('CreateTodo');
  };

  const {addTodo} = useContext(TodoContext);

  return (
    <>
      <View
        style={{
          backgroundColor: 'white',
          width: wp(70),
          height: hp(60),
          alignSelf: 'center',
          // zIndex: 1000,
          elevation: 50,
          marginTop: hp(5),
          borderRadius: 15,
          overflow: 'hidden',
          borderWidth: wp(1),
          borderColor: '#9CD429',
        }}>
        <Text
          style={{
            // backgroundColor: 'pink',
            fontFamily: 'Lato-Black',
            fontSize: hp(2),
            margin: wp(2),
            marginTop: hp(2),
            textAlign: 'center',
          }}>
          Create / Edit Grocery Here
        </Text>
        <TextInput
          mode={'outlined'}
          label={'Grocery Item'}
          style={{
            backgroundColor: 'white',
            fontFamily: 'Lato-Medium',
            fontSize: hp(2),
            margin: wp(3),
            textAlign: 'center',
            marginTop: hp(5),
            height: hp(6),
          }}
          value={content}
          onChangeText={setContent}
          returnKeyType={'next'}
          onSubmitEditing={() => {
            secondTextInput.focus();
          }}
        />

        {/* Jeans and Shirt
            </Text> */}
        <View
          style={{
            //   backgroundColor: 'yellow',
            margin: wp(3),
            marginTop: wp(6),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* Cart */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesome
              name="shopping-basket"
              color={'#4d4d4d'}
              size={hp(1.8)}
            />
            <Entypo name="cross" color={'#4d4d4d'} size={hp(1.8)} />
            <TextInput
              label={'?'}
              value={quantity}
              mode={'outlined'}
              keyboardType={'number-pad'}
              style={{
                height: hp(5),
                fontFamily: 'Lato-Black',
                // fontSize: hp(1.8),
                paddingLeft: wp(2),
                color: '#4d4d4d',
                textAlignVertical: 'center',
              }}
              onChangeText={setQuant}
              ref={(input) => {
                secondTextInput = input;
              }}
              onSubmitEditing={() => {
                thirdTextInput.focus();
              }}
            />

            {/* </TextInput> */}
          </View>

          {/* Price */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: wp(7),
            }}>
            <FontAwesome name="rupee" color={'#4d4d4d'} size={hp(1.8)} />
            {content && quantity !== '' ? (
              <TextInput
                label={'₹'}
                value={price}
                mode={'outlined'}
                returnKeyType={'done'}
                keyboardType={'number-pad'}
                style={{
                  height: hp(5),
                  fontFamily: 'Lato-Black',
                  // fontSize: hp(1.8),
                  paddingLeft: wp(2),
                  color: '#4d4d4d',
                  textAlignVertical: 'center',
                }}
                onChangeText={setPrice}
                ref={(input) => {
                  thirdTextInput = input;
                }}
                onSubmitEditing={() => redirect()}
              />
            ) : (
              <TextInput
                label={'₹'}
                mode={'outlined'}
                returnKeyType={'done'}
                keyboardType={'number-pad'}
                style={{
                  height: hp(5),
                  fontFamily: 'Lato-Black',
                  // fontSize: hp(1.8),
                  paddingLeft: wp(2),
                  color: '#4d4d4d',
                  textAlignVertical: 'center',
                }}
                onChangeText={setPrice}
                ref={(input) => {
                  thirdTextInput = input;
                }}
              />
            )}
          </View>
        </View>

        {/* Lower Buttons */}
        <View
          style={{
            width: wp(50),
            flex: 1,
            alignSelf: 'center',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          {/* Submit */}
          {content && quantity !== '' ? (
            <TouchableOpacity
              hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
              onPress={() => redirect()}>
              <FontAwesome name="save" color={'#4d4d4d'} size={hp(4.5)} />
            </TouchableOpacity>
          ) : (
            <View></View>
          )}

          <TouchableOpacity
            hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
            onPress={() => {
              // activef(!props.cfmodal);
              props.setCfmodal(!props.cfmodal);
            }}>
            <Entypo name="circle-with-cross" color={`red`} size={hp(4.5)} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default CreateTodo;
