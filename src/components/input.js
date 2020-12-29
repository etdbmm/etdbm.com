import React from 'react'

const baseStyle =
  'block border border-white rounded-md bg-blue text-white w-full p-4 focus:outline-none focus:border-none'

const labelStyle =
  'absolute -top-3 left-6 pointer-events-none bg-blue text-white px-2'

export const Input = ({ label, name, ...props }) => (
  <div className="relative">
    <label for={name} className={labelStyle}>
      {label}
    </label>
    <input className={baseStyle} name={name} id={name} {...props} />
  </div>
)

export const Textarea = ({ label, name, ...props }) => (
  <div className="relative">
    <label for={name} className={labelStyle}>
      {label}
    </label>
    <textarea
      className={`${baseStyle} h-60 resize-none`}
      name={name}
      id={name}
      {...props}
    />
  </div>
)
