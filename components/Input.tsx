import React, { useState } from 'react';

type InputProps = {
  placeholder: string
  type: 'percentage' | 'number'
  onChange: (val: number) => void
  value: undefined | number
}

function Input({ placeholder, type, onChange, value }: InputProps) {

  const limits = type === 'percentage' ? { min: 0, max: 100 } : {}

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    let newValue: number = 0
    if (type === 'percentage') {
      newValue = +value > 100 ? 100 : +value < 0 ? 0 : +value
    } else {
      newValue = +value
    }

    onChange(newValue)
  }

  return (
    <input
      type="number"
      className="mr-4 w-20 py-1 px-2"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      step={0.01}
      {...limits}
    />
  )
}

export default Input
