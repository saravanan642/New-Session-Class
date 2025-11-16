import React from 'react'

const BooleanExample = () => {
  const isOnline = false;  // or false

  return (
    <div>
      <p>{isOnline ? "Yes" : "No"}</p>
    </div>
  )
}

export default BooleanExample;
