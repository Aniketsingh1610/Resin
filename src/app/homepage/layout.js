'use client'
import React, { useEffect } from 'react'
import Link from 'next/link';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Layout({ children }) {

    useGSAP(() => {
        gsap.from(".navbar", {
            y: -200,
            duration: 1
        })
    })

    return (
        <div className="flex flex-col min-h-screen">
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
                           <Link href="/contact">
                            <li className="hover:cursor-pointer bg-black text-white rounded p-1 -m-1">Contact</li>
                           </Link>
                        </ul>
                    </div>
                </div>
            </header>

            <main className="flex-grow">
                {children}
            </main>

            <footer className='bg-neutral-300 p-4'>
                <div className="text-center">
                    <span>Resin</span>
                    <p>All rights reserved @2024</p>
                    <div className='mt-4 flex justify-center gap-2'>
                        <img className='h-5 hover:cursor-pointer mix-blend-darken' src="https://w7.pngwing.com/pngs/477/596/png-transparent-computer-icons-facebook-blog-facebook-logo-desktop-wallpaper-facebook-icon-thumbnail.png" alt="" />
                        <img className='h-5 hover:cursor-pointer mix-blend-darken' src="https://static.vecteezy.com/system/resources/previews/008/385/572/original/twitter-social-media-icon-abstract-symbol-illustration-free-vector.jpg" alt="" />
                        <img className='h-5 hover:cursor-pointer mix-blend-darken' src="https://w7.pngwing.com/pngs/874/257/png-transparent-whatsapp-computer-icons-computer-software-whatsapp-text-logo-whatsapp-icon.png" alt="" />
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout
