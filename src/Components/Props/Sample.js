import React from 'react'

const Sample = (props) => {
  return (
    <div >
      <h1 className='bg-green-900'> Name -{props.employee.Named}</h1>
      <h2>Sallary:{props.employee.Sallary}</h2>
    </div>
  )
}

export default Sample
