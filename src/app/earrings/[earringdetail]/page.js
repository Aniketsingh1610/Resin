'use client'
import React from 'react'
import { useEffect } from 'react';
import productdata from '../../../../services/productdata';

function page(props) {

  const [earringdata, setearringData] = React.useState([]);
  const [data, setData] = React.useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await productdata();
      setData(result);
    }
    fetchData();
  });

  useEffect(() => {
    async function fetchData() {
      const result = await productdata();
      const earringid = props.params.earringdetail;
      const earringdata = result[earringid - 1]
      console.log(result[earringid - 1]);
      setearringData(earringdata);

    }
    fetchData();
  }, []);


  return (
    <div>

      <div className='flex mt-20 ml-40 justify-around'>

        <div>
          <img className='h-96 hover:scale-125 ease-in-out duration-500' src={earringdata.image} />
        </div>

        <div>
          <h1 className='font-bold text-4xl p-3'>{earringdata.title}</h1>
          <p className='w-96 p-3'>Image descripton Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quia libero aliquid dignissimos modi dolor? Atque molestias accusamus tempore quasi quam saepe in perspiciatis! Modi eaque autem optio quos minus harum aliquid aliquam, omnis ullam accusamus nostrum vitae facilis sapiente eos dignissimos rem impedit, culpa soluta officia nesciunt, adipisci dolores?.</p>
          <p className='font-bold p-3'>{earringdata.price}</p> <button className='bg-black text-white p-3 mx-3'>Buy now</button>
        </div>

      </div>

      <div>
        
        <h1 className='text-center text-3xl my-10'>Related Products</h1>

        <div className="flex justify-evenly">

          {data.slice(8, 12).map((item, index) => (
          <div className='hover:scale-105 hover:cursor-pointer ease-in-out duration-300' key={index}>
          <img className="h-64 aspect-square" src={item.image} alt={item.title} />
          <h1 className="text-center font-bold">{item.title}</h1>
          {console.log(item)}
          </div>
          ))}

        </div>

      </div>


    </div >
  )
}

export default page
