'use client'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'


function page() {
  
  useGSAP(()=>{
    gsap.from("#insideimg_1",{
      y: -500 , duration:1
    })
    gsap.from("#insideimg_2",{
      y: -500 , duration:1, delay:1 
    })
    gsap.from("#insideimg_btn",{
      y: 200 , duration:1, delay:2.5
    })
  })

  return (
    <div>
      <div>
       <div className="flex items-center justify-center">
       <img alt="image" className="h-80 rounded w-3/4 my-32 object-cover" src="/images/111.png"  />
     </div>    
     <div className="insideimg flex flex-col justify-center items-center relative bottom-80 overflow-hidden">
         <h1 id="insideimg_1" className="text-white text-center text-3xl font-bold">Resin Art</h1>
         <p id="insideimg_2" className="text-white text-center">A form of art or craft that uses rasins as primary element</p>
         <button id="insideimg_btn" className="bg-black w-20 rounded text-white p-1 mt-4">Explore</button>
     </div>
     <h1 id="midtext" className="text-center text-neutral-600 text-5xl italic relative bottom-36 ">
     TRANSFORM YOUR LIVING SPACES WITH EXQUISITE HANDMADE ART CRAFTED BY ARTISANS
     </h1>
 <h1 className="text-3xl mb-14 text-center relative bottom-14">Products</h1>
     <div className="grid place-items-center gap-10 grid-cols-2  relative bottom-14">
       <img alt="image" className="h-72 w-72 rounded hover:scale-105 transition-all duration-700 ease-in-out" src="/images/3.jpg"  />
       <img alt="image" className="h-72 w-72 rounded hover:scale-105 transition-all duration-700 ease-in-out" src="/images/6.jpg"  />
       <img alt="image" className="h-72 w-72 rounded hover:scale-105 transition-all duration-700 ease-in-out" src="/images/10.jpg"  />
       <img alt="image" className="h-72 w-72 rounded hover:scale-105 transition-all duration-700 ease-in-out" src="/images/12.jpg"  />
     </div>
     <footer className="flex justify-between p-10 mt-5 bg-stone-100">
       <div>Resin</div>    
       <div>
         <table>
           <tr>
             <th>Products</th>
             <th>Contacts</th>
           </tr>
           <tr>
             <td>Wall Arts</td>
             <td>Instagram</td>
           </tr>
           <tr>
             <td>Clock</td>
             <td>Facebook</td>
           </tr>
           <tr>
             <td>Necklace</td>
             <td>Whatsapp</td>
           </tr>
         </table>
       </div>

     </footer>

     </div>
    </div>
  )
}

export default page
