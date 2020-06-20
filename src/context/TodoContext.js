// import React, {useState, createContext, useReducer} from 'react';
import createDataContext from './createDataContext';
// const TodoContext = createContext();
import {addTodoAsync} from './../storedb/AsyncStorageDB';

const TodoReducer = (state, action) => {
  switch (action.type) {
    case 'delete_todo':
      return state.filter((todo) => todo.id !== action.payload);
      
    case 'add_todo':
      return [
        ...state,
        {
          // id: `${state.length + 1}`,
          // id: Math.floor(Math.random() * 99999),
          id: action.payload.id,
          content: action.payload.content,
          quantity: action.payload.quantity,
          price: action.payload.price,
          color: action.payload.color,
        },
      ];
    default:
      return state;
  }
};

const addTodo = (dispatch) => {
  return async(content, quantity, price, color) => {
    const id = Math.floor(Math.random() * 99999);
    await Promise[addTodoAsync(id, content, quantity, price, color)];
     dispatch({type: 'add_todo', payload: {id, content, quantity, price, color}});
  };
};

const deleteTodo = (dispatch) => {
  return async (id) => {
    await Promise[dispatch({type: 'delete_todo', payload: id})];
  };
};


export const {Context, Provider} = createDataContext(
  TodoReducer,
  {addTodo, deleteTodo},
  [
    //   {
    //     id: 1,
    // content: 'Books',
    // quantity: 51,
    // price: 0,
    // color: 'teal',
    //   },
    //   {
    //     id: 2,
    // content: 'Yoga Mat',
    // quantity: 41,
    // price: 100,
    // color: 'red',
    //   },
    //   {
    //     id: 3,
    // content: 'Taylor Guitar',
    // quantity: 2,
    // price: 0,
    // color: 'teal',
    //   },
    //   {
    //     id: 4,
    // content: 'Justin Beiber',
    // quantity: 41,
    // price: 1,
    // color: 'red',
    //   },
  ],
);
// export default TodoContext;

// const todos = [
//   {
//     id: 1,
//     content: 'Bakery and Bread',
//     color: 'red',
//     quantity: 8,
//     price: 25,
//   },
//   {
//     id: 2,
//     content: 'Meat and Seafood',
//     color: 'black',
//     quantity: 18,
//     price: 27,
//   },
//   {
//     id: 3,
//     content: 'Pasta and Rice',
//     color: 'orange',
//     quantity: 77,
//     price: 6,
//   },
//   {
//     id: 4,
//     content: 'Oils, Sauces',
//     color: '#9CD429',
//     quantity: 37,
//     price: 65,
//   },
//   {
//     id: 5,
//     content: 'Bakery and Bread',
//     color: 'red',
//     quantity: 27,
//     price: 61,
//   },
//   {
//     id: 6,
//     content: 'Meat and Seafood',
//     color: 'black',
//     quantity: 77,
//     price: 6,
//   },
//   {
//     id: 7,
//     content: 'Pasta and Rice',
//     color: 'orange',
//     quantity: 77,
//     price: 6,
//   },
//   {
//     id: 8,
//     content: 'Oils, Sauces',
//     color: '#9CD429',
//     quantity: 77,
//     price: 6,
//   },
// ];
