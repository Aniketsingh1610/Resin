
'use client'
import Link from 'next/link';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'

function homepage() {


  useGSAP(() => {
    const timeline = gsap.timeline({ defaults: { duration: 1 } })
    timeline
      .from("#insideimg_1", { y: -500, delay: 0.5 })
      .from("#insideimg_2", { y: -500 })
      .from("#insideimg_btn", { y: -500 })
    // .fromTo(".hmp_img1",{opacity: 0},{opacity:1})
    // .fromTo(".hmp_img2",{opacity: 0},{opacity:1})
    // .fromTo(".hmp_img3",{opacity: 0},{opacity:1})
    // .fromTo(".hmp_img4",{opacity: 0},{opacity:1})
  })


  return (
    <div >
      <div className="flex items-center justify-center">
        <img className="h-80 rounded w-3/4 my-32 object-cover" src="/images/111.png" alt="" />
      </div>
      <div className="insideimg flex flex-col justify-center items-center relative bottom-80 overflow-hidden">
        <h1 id="insideimg_1" className="text-white text-center text-3xl font-bold">Resin Art</h1>
        <p id="insideimg_2" className="text-white text-center">A form of art or craft that uses rasins as primary element</p>
        <Link href='/products'>
          <button id="insideimg_btn" className="bg-black w-20 rounded text-white p-1 mt-4">Explore</button>
        </Link>
      </div>
      <h1 id="midtext" className="text-center text-neutral-600 text-5xl italic relative bottom-36 ">
        TRANSFORM YOUR LIVING SPACES WITH EXQUISITE HANDMADE ART CRAFTED BY ARTISANS
      </h1>


      <h1 className="text-3xl mb-14 text-center relative bottom-14">Product Category</h1>


      <div className="grid place-items-center gap-10 grid-cols-2  relative bottom-14 mb-20">

        <div className="group">
          <Link href="/earrings">
            <img className=" hmp_img1 h-72 w-72 rounded-xl hover:scale-105 transition-all duration-700 ease-in-out " src="/images/3.jpg" alt="" />

            <h1 className="text-black text-center pt-2">Ear Rings</h1>
          </Link>

        </div>
        <Link href="/pendent">
          <div className=" ">
            <img className="hmp_img2 h-72 w-72 rounded-xl hover:scale-105 transition-all duration-700 ease-in-out" src="/images/6.jpg" alt="" />
            <h1 className="text-black text-center pt-2">Pendent</h1>
          </div>
        </Link>

        <Link href="/wallclock">
          <div className="">
            <img className="hmp_img3 h-72 w-72 rounded-xl hover:scale-105 transition-all duration-700 ease-in-out" src="/images/10.jpg" alt="" />
            <h1 className="text-black text-center pt-2">Wall Clocks</h1>
          </div>
        </Link>

        <Link href="/nameplate">
          <div className="">
            <img className="hmp_img4 h-72 w-72 rounded-xl hover:scale-105 transition-all duration-700 ease-in-out" src="/images/12.jpg" alt="" />
            <h1 className="text-black text-center pt-2">Name Plates</h1>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default homepage
