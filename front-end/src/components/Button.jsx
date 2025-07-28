import React from 'react'

const Button = ({text, className, onClick, icons}) => {
  return (
    <button className={`${className} bg-blue-500 text-white font-semibold cursor-pointer px-4 py-1 rounded-md `} onClick={onClick}>
        <p className='inline-flex gap-2 '> {text} {icons && <span>{icons}</span> }</p>
    </button>
  )
}

export default Button