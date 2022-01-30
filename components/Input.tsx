import React, { useState } from 'react';

type InputProps = {
  placeholder: string
  type: 'percentage' | 'number'
}

function Input({ placeholder, type }: InputProps) {

  const [newValue, setNewValue] = useState<undefined | number>(undefined)

  const limits = type === 'percentage' ? { min: 0, max: 100 } : {}

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (type === 'percentage') {
      setNewValue(+value > 100 ? 100 : +value < 0 ? 0 : +value)
    } else {
      setNewValue(+value)
    }
  }

  return (
    <input
      type="number"
      className="mr-4 w-20 py-1 px-2"
      placeholder={placeholder}
      value={newValue}
      onChange={handleChange}
      step={0.01}
      {...limits}
    />
  )
}

export default Input
