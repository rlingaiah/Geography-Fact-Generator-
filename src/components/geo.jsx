import React from 'react';
import './geo.css';

export default class Geography extends React.Component{
  render(){
    return(
      <div className="fact">
      {
      this.props.fact
      }
      </div>
      );
      }
  };
