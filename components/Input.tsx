import React, { useState } from 'react';

type InputProps = {
  placeholder: string
  onChange: (val: number | undefined) => void
  value: undefined | number
}

function Input({ placeholder, onChange, value }: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    let newValue: number | undefined = undefined
    if (value === '') {
      newValue = undefined
    } else {
      newValue = +value
    }

    onChange(newValue)
  }

  return (
    <input
      type="number"
      className="input"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      step={0.01}
    />
  )
}

export default Input
