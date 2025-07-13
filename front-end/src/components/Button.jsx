import React from 'react'

const Button = ({text, className, onClick}) => {
  return (
    <button className={`${className} bg-blue-500 text-white font-semibold px-4 py-1 rounded-md `} onClick={onClick}>
        {text}
    </button>
  )
}

export default Button