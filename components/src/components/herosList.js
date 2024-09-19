import React from 'react'

function herosList() {
  return (
   
    <div className='HerosDiv'>
       <img src={props.pic} alt=''></img>
      <h2>Name:{props.name}</h2>
      <h2>Movie:{props.movie}</h2>
      <h2>Year:{props.year}</h2>
    </div>
  )
}

export default herosList
