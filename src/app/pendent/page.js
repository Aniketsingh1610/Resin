'use client'
import gsap from 'gsap';
import { useEffect, useState } from 'react';
import React from 'react';
import Link from 'next/link';
import alldata from '../../../services/alldata';
import { useGSAP } from '@gsap/react';

  const pendent = () => {

  const [all_data, setall_Data] = useState([]);

  useEffect(() => {
    async function all_data() {
      const results = await alldata();
      setall_Data(results);
    }
    all_data();
  });

  useGSAP(() => {
    gsap.fromTo(".leftarrow",
      { x: -200, duration: 1, delay: 0, opacity: 0 },
      { x: 0, duration: 1, delay: 2, opacity: 1 }
    );
    gsap.fromTo(".rightarrow",
      { x: 200, duration: 1, delay: 0, opacity: 0 },
      { x: 0, duration: 1, delay: 2, opacity: 1 }
    );
    gsap.fromTo(".earringsheading",
      { duration: 1, delay: 0, opacity: 0 },
      { duration: 1, delay: 1, opacity: 1 }
    );
    gsap.fromTo(".earrings_images",
      { duration: 1, delay: 0, opacity: 0 },
      { duration: 1, delay: 3.2, opacity: 1 }
    );
  });

  return (
    <div>
      <div className='flex justify-center mb-24 items-center'>
        <img alt="image" className='leftarrow relative top-14 left-40 scale-50' src="/images/line.png"  />
        <h1 className='earringsheading text-4xl font-bold text-center mt-28'>Pendents</h1>
        <img alt="image" className='rightarrow relative top-14 right-40 scale-50' src="/images/line.png"  />
      </div>

      <div className='earrings_images gap-10 grid grid-cols-3 place-items-center mb-20'>
        {
          all_data.slice(0, 7).map((items) => (
            <Link key= {items.id} href={`/pendentdetail/${items.id}`}>
              <div className='hover:cursor-pointer hover:scale-105 ease-in-out duration-300'>
              <img className=' h-64 aspect-square' src={items.image} alt={items.title} />
              <h1 className='text-center font-bold'>{items.title}</h1>
              <h1 className='text-center'>{items.price}</h1>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  );
}

export default pendent;
