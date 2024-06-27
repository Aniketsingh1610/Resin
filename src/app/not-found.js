import Link from 'next/link'
import React from 'react'
function notfound() {
    return (
        <div>

            <header className='navbar'>
                <div className="absolute top-0 left-0 right-0 flex justify-between m-4">
                    <Link href="/homepage">
                        <h1 className="title text-4xl font-bold">Resin Art</h1>
                    </Link>
                    <div>
                        <ul className="list-none flex gap-5 m-1">
                            <Link href="/products"> <li className="hover:cursor-pointer">Products</li> </Link>
                            <li className="hover:cursor-pointer">Gallery</li>
                            <li className="hover:cursor-pointer">Reviews</li>
                            <li className="hover:cursor-pointer bg-black text-white rounded p-1 -m-1">Contact</li>
                        </ul>
                    </div>
                </div>
            </header>

            <div className='grid place-items-center  mt-24  gap-5'>
                <h1 className='underline text-4xl font-semibold'>This is a Demo Website</h1>
                <h1 className='text-3xl'>All Components are not coded completely</h1>
                <h1 className='text-3xl'>Only Earring page is coded completely </h1>
                <Link href="/earrings">
                    <div className='flex mt-10 justify-center'>
                        <img className='h-64' src="/images/new.jpg" alt="" />
                    </div>
                    <h1 className='text-3xl hover:underline'>&#8594; Link to Earring Page</h1>
                {/* <h1 className='text-3xl'>Thank You </h1> */}
                </Link>
            </div>

        </div>

    )
}

export default notfound
