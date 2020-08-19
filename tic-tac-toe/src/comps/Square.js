import React from "react";

//Styling 
/**
 * {To Do:  Move To Style CSS}
 */
const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
};





const Square = ({onClick, value}) => (
  
  <button style = {style} onClick={onClick}>{value}</button>
);

export default Square;
