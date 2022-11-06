import React, { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    //
}

const Button = (props: Props) => {
  const {className, ...x} = props
  return (
    <button className={`bg-primary text-white border-2 border-primary hover:bg-white hover:text-primary 
      px-5 py-2.5 ${className}`}
      {...x}
    >
        {props.children}
    </button>
  )
}

export default Button