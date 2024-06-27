'use client'
import React, { useState } from 'react'
import category from '../../../services/productcategory'

function products() {

  const [category_data, setcategory_data] = useState([])

  useState(()=>{

    async function fetchcategory() {
      const categorydata = await category();
      setcategory_data(categorydata)
    }
    fetchcategory();
  
  },[])


  return (
    <div>

      <h1 className='text-4xl font-bold underline text-center m-20'>Products available on Resin</h1>
      <div className='grid gap-20 place-items-center grid-cols-4'>

        {
          category_data.slice(0,9).map((item) => (
            <div className='hover:cursor-pointer hover:scale-105 ease-in-out duration-300' key={item.id}>
              <img className='h-72 hover:cursor-pointer aspect-square hover:scale-105 ease-in-out duration-300' src={item.image} alt={item.title} />
              <p className='m-3 font-semibold text-center'>{item.title}</p>
            </div>
          ))
        }

      </div>

    </div>
  )
}

export default products
