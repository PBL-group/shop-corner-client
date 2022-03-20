import React from 'react'
import Logo from '../../assets/images/brands/Promo-and-Company-Logo.svg'

const Brands = () => (
    <section className='flex flex-col gap-8 align-center py-8 px-16'>
        <div className='w-full flex justify-center'>
            <span className='text-4xl letter-4 uppercase font-neue'>Our Affiliated Brands</span>
        </div>
        <div className='container flex justify-between'>
            <div className='flex flex-col overflow-hidden gap-2'>
                <img alt='' className='w-48 rounded-3xl' src={Logo} />
            </div>
            <div className='flex flex-col overflow-hidden gap-2'>
                <img alt='' className='w-48 rounded-3xl' src={Logo} />
            </div>
            <div className='flex flex-col overflow-hidden gap-2'>
                <img alt='' className='w-48 rounded-3xl' src={Logo} />
            </div>
            <div className='flex flex-col overflow-hidden gap-2'>
                <img alt='' className='w-48 rounded-3xl' src={Logo} />
            </div>
            <div className='flex flex-col overflow-hidden gap-2'>
                <img alt='' className='w-48 rounded-3xl' src={Logo} />
            </div>

        </div>
    </section>
)


export default Brands