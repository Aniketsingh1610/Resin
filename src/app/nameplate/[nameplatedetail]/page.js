'use client'
import React from 'react'
import { useEffect } from 'react';
import alldata from '../../../../services/alldata';

function page(props) {

  const [nameplatedata, setnameplateData] = React.useState([]);
  const [all_data, setall_Data] = React.useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await alldata();
      setall_Data(result);
    }
    fetchData();
  });

  useEffect(() => {

    async function fetchData() {
      const result = await alldata();
      const nameplateid = props.params.nameplatedetail;
      const nameplatedata = result[nameplateid - 1]
      console.log(result[nameplateid - 1]);
      setnameplateData(nameplatedata);
    }

    fetchData();
  }, []);


  return (
    <div>

      <div className='flex mt-20 ml-40 justify-around'>

        <div>
          <img className='h-96' src={nameplatedata.image} />
        </div>

        <div>
          <h1 className='font-bold text-4xl p-3'>{nameplatedata.title}</h1>
          <p className='w-96 p-3'>Image descripton Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quia libero aliquid dignissimos modi dolor? Atque molestias accusamus tempore quasi quam saepe in perspiciatis! Modi eaque autem optio quos minus harum aliquid aliquam, omnis ullam accusamus nostrum vitae facilis sapiente eos dignissimos rem impedit, culpa soluta officia nesciunt, adipisci dolores?.</p>
          <p className='font-bold p-3'>{nameplatedata.price}</p> <button className='bg-black text-white p-3 mx-3'>Buy now</button>
        </div>

      </div>

      <div>
        
        <h1 className='text-center text-3xl my-10'>Related Products</h1>

        <div className="flex justify-evenly">

          {data.slice(0, 4).map((item, index) => (
          <div key={index}>
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
