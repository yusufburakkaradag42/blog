import React, { useState, useReducer } from 'react';
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost'://ekleme işlemi
      return [...state, {
        id:Math.floor(Math.random()*999999),//rastgele id numarası atama 
        title: 'NodeJs',

     }];

     case 'delete_blogpost':// delete işlemi
        return state.filter((blogPost)=> blogPost.id !== action.payload)
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => { //ekleme işlemi
  return () => {
    dispatch({ type: 'add_blogpost' });
  };
};


const deleteBlogPost =(dispatch)=>{//silme işlemi

    return (id) => {
        dispatch({ type: 'delete_blogpost' , payload:id });
      };

}


export const { Context, Provider } = createDataContext(// dışarıya açma
  blogReducer,
  { addBlogPost,
     deleteBlogPost,
     },
  []

);
