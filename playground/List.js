import React, { Component } from 'react';

class List extends Component{
    render(){
      return (<ol>
                {this.props.array.map((arrayEle,index)=> <li key={index}>{arrayEle}</li>)}
            </ol>)
    }
  }

  export default List