import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    //
}

const Input = (props: Props) => {
  const {className, ...x} = props
  return (
    <input className={`bg-slate-100 outline-base focus:outline-blue-400 rounded-md p-3 ${className}`} {...x} />
  )
}

export default Input