import React from 'react';
import './Curtain.css';

const Curtain = (props) => {
   return <div className={props.v ? 'curtain visible' : 'curtain'}></div> 
}

export default Curtain;