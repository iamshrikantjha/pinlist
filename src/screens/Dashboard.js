import React, {useState, useEffect, useContext} from 'react';
import {FlatList, StyleSheet, View, Share} from 'react-native';
import {FAB} from 'react-native-paper';
import Loading from './Loading';
import AsyncStorage from '@react-native-community/async-storage';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Context as TodoContext} from './../context/TodoContext';

import ItemCard from '../components/ItemCard';
import InfoSec from '../components/InfoSec';
import CreateTodo from './CreateTodo';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [cfmodal, setCfmodal] = useState(false);
  const {state} = useContext(TodoContext);
  const [resultx, setResult] = useState('');
  const [todos, setTodos] = useState(null);
  const [tempState, setTempState] = useState({});

  const getData = async () => {
    const existingTodos = await AsyncStorage.getItem(`todos`);
    let newTodo = JSON.parse(existingTodos);
    // if( !newTodo ){
    //   setTempState(state);
    //   console.log('New list will be created');
    console.log(newTodo);
    // newTodo = []
    // console.log('New list created');
    // }
    
    {
      !newTodo ? setTempState(state) : setTempState(newTodo);
    }
    setLoading(false);
    setTodos(JSON.parse(existingTodos));
  };

  useEffect(() => {
    getData();
    console.log(tempState);
  }, []);

  const getShare = () => {
    // console.log(state);
    // setResult();
    // setResult(`${JSON.stringify(state, ['id', 'content', 'quantity', `price`]).replace(/"([^"]+)":/g, '$1:').replace(/id:/g, '\b\b\b').replace(/,content:/g, ".\xa0").replace(/,quantity:/g, "\xa0x\xa0").replace(/,price:/g, '\xa0=\xa0')}`);
    // console.log('Shared');
    // console.log('Shared resultx');
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: resultx,
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
    <View
      style={{
        position: 'absolute',
        width: wp(100),
        height: hp(100),
        zIndex: 0,
      }}>
      {/* <NativeAdView style={{
        width: wp(100),
        height: hp(5),
        position: 'absolute',
        alignSelf: "center",
        zIndex: 400,
        // backgroundColor: 'pink',
      }} 
      adUnitID="ca-app-pub-3940256099942544/6300978111"
      >
          <AdBadge />
      </NativeAdView> */}
      {cfmodal === true ? (
        <View
          style={{
            // backgroundColor: 'black',
            flex: 1,
            position: 'absolute',
            zIndex: 2,
            width: wp(100),
            height: hp(100),
          }}>
          <CreateTodo setCfmodal={setCfmodal} cfmodal={cfmodal} />
          {/* <CreateTodo /> */}
        </View>
      ) : (
        <></>
      )}

      <FAB
        style={{
          position: 'absolute',
          marginLeft: wp(5),
          marginBottom: hp(10),
          left: 0,
          bottom: 0,
          zIndex: 1,
        }}
        small
        loading={false}
        icon="share-variant"
        onPress={() => {
          getShare();
          onShare();
        }}
      />
      <FAB
        style={{
          position: 'absolute',
          marginRight: wp(5),
          marginBottom: hp(10),
          right: 0,
          bottom: 0,
          zIndex: 1,
        }}
        small
        loading={false}
        icon="plus"
        onPress={() => setCfmodal(true)}
      />
      <View
        style={{
          backgroundColor: '#9CD429',
          height: hp(10),
        }}></View>

      <InfoSec />

      <View
        style={{
          width: wp(90),
          // heightfalsefalse: null,
          height: hp(70),
          alignSelf: 'center',
          marginTop: hp(7),
          // marginBottom: hp(5),
        }}>
        {loading === false ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(tempState) => tempState.id.toString()}
            data={tempState}
            renderItem={({item}) => {
              return (
                <ItemCard
                  color={item.color}
                  content={item.content}
                  price={item.price}
                  quantity={item.quantity}
                  id={item.id}
                />
              );
            }}
          />
        ) : (
          <Loading />
        )}

        {/* </ScrollView> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    // margin: wp(10),
    margin: 20,
    right: 0,
    bottom: 0,
    zIndex: 1,
    // backgroundColor: 'black',
  },
  cfheader: {
    backgroundColor: '#9CD429',
    width: wp(100),
    height: hp(6),
  },
});

export default Dashboard;
