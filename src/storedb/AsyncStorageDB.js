import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

// Async Storage
const addTodoAsync = async(id, content, quantity, price, color) => {
    const todoToBeSaved = {
      id,
      content,
      quantity,
      price,
      color,
    }
    const existingTodos = await AsyncStorage.getItem(`todos`)
    let newTodo = JSON.parse(existingTodos);
    if( !newTodo ){
      console.log('New list will be created');
      newTodo = []
      console.log('New list created');
    }
    console.log('New list not created');
    newTodo.push( todoToBeSaved )
    await AsyncStorage.setItem(`todos`, JSON.stringify(newTodo) )
    .then( ()=>{
    console.log(`It was saved successfully`)
    } )
    .catch( ()=>{
    console.log(`There was an error saving the product`)
    } )
  }


  const editTodoAsync = async(id, content, quantity, price, color) => {
    const todoToBeSaved = {
      id: Math.floor(Math.random() * 99999),
      content,
      quantity,
      price,
      color,
    }
    const existingTodos = await AsyncStorage.getItem(`todos`)
    let newTodo = JSON.parse(existingTodos);
   
    console.log('New list not created');
    newTodo.push( todoToBeSaved )
    await AsyncStorage.setItem(`todos`, JSON.stringify(newTodo) )
    .then( ()=>{
    console.log(`It was saved successfully`)
    } )
    .catch( ()=>{
    console.log(`There was an error saving the product`)
    } )
  }

export {addTodoAsync, editTodoAsync};