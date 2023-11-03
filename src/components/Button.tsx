import React, { ButtonHTMLAttributes } from 'react';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // ?: makes it optional
  variant?: 'primary' | 'secondary';
  label:string;
  customStyling?: string;
  
}


const Button: React.FC<ButtonProps> = ({ variant = 'primary', label, customStyling, ...props }) => {
  const className = `button ${variant} ${customStyling || ''}`;
  return <button className={className} {...props} >{label}</button>;
};

export default Button;
