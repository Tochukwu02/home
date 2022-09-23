import React from 'react';
import './Button.css';
const Button = ({text}) => {
  return (
    <button className='btn btn-primary'>
        {text}
    </button>
  )
}

export default Button