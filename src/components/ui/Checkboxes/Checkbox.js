import React from 'react'

export const Checkbox = ({ id, label, ...args }) => {
  return (
    <div>
      <input type="checkbox" id={id} name={id} {...args} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}
