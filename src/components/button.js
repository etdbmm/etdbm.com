import React from 'react'

const Button = ({ label, primary, ...props }) => (
  <button
    className={`py-4 px-5 border border-white text-white font-semibold leading-none rounded-md transition duration-500 ${
      primary
        ? `bg-pink hover:bg-blue border-pink hover:border-white`
        : `bg-blue hover:border-pink hover:text-pink`
    }`}
    {...props}
  >
    {label}
  </button>
)

export default Button
