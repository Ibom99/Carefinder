import React from 'react';
import { BiCircle } from 'react-icons/bi';
const Button = ({
  withIcon,
  icon,
  text,
  onClick,
  className,
  loading,
  type = 'button',
  disabled,

}) => {
  return (
    <button
      className={`${className}`}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}>
      {withIcon && <span className='mr_10'>{icon}</span>}
      {loading && (
        <span className=''>
          <BiCircle size={16} className='mx-auto animate-spin' />
        </span>
      )}
      <div className='ml_10'>{text}</div>
    </button>
  );
};

export default Button;
