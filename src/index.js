import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesheet.css'
import Main from './components/Main'
import {BrowserRouter} from 'react-router-dom'

// using createElement.............................

const numbers = ['first','second','third'];
// map provides second argument as index in the array..
// const element = React.createElement('ol',null,
//  array.map((arrayEle, index )=> React.createElement('li',{key : index},arrayEle))
//  );

// unique keys .. {key : arrayEle}



// JSX............................

const element = 
  <div>
    <h1>Array Elements .. </h1>
    <ol>
      {numbers.map((arrayEle,index)=> <li key={index}>{arrayEle}</li>)}
      <li> {numbers[0]}</li>       
      <li> {numbers[1]}</li>  
      <li> {numbers[2]} </li>  
    </ol>
  </div>

// binding differnt components into Main Component using Classes.......................
// differnt classes in diffrent files...

ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>,document.getElementById('root'));


