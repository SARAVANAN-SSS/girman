import React from 'react'
import { useLocation } from 'react-router-dom'

const Cards = () => {

    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);

    const searchValues = searchParams.get('search')


  return (
    <div className='bg-[#eff1f7] h-[89vh] text-center my-auto'>Cards: {searchValues}</div>
  )
}

export default Cards