import React from 'react'

function contact() {
    return (
        <div className='contact mt-16'>
            <div className='p-14'>
                <div className='grid gap-10'>
                    <div>
                        <h1 className='text-3xl my-10 font-semibold underline'>How can we Help You ? </h1>
                    </div>

                    <div>
                        <h1 className='text-3xl my-5 font-semibold underline'>Contact Us</h1>

                    <div className='flex gap-20'>
                        <a target="_blank" href="aniketsingh16oct2000@gmail.com">
                            <img className='h-16 aspect-square mix-blend-darken' src="https://p7.hiclipart.com/preview/502/246/366/gmail-computer-icons-email-google-desktop-gmail-thumbnail.jpg" alt="" />
                        </a>
                        <a target="_blank" href="www.instagram.com/Aniketsingh016">
                            <img className='h-16 aspect-square mix-blend-darken' src="https://i.pinimg.com/originals/71/72/16/7172161b580470deb78078669236d2c1.jpg" alt="" />
                        </a>
                        <a target="_blank" href="www.whatsapp.com/9373503353">
                            <img className='h-16 aspect-square mix-blend-darken' src="https://p7.hiclipart.com/preview/922/489/218/whatsapp-icon-logo-whatsapp-logo-png.jpg" alt="" />
                        </a>
                    </div>
                    </div>

                    <div>
                        <h1 className='text-3xl my-10 font-semibold underline'>Feel free to message us directly.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contact
