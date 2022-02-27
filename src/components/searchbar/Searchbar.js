import React from 'react'
import { MdSearch } from "react-icons/md";


const Searchbar = () => (
    <form className='flex  align-center border-b-2 border-black'>
        <button type='submit' className='text-2xl'>
            <MdSearch />
        </button>
        <input type='search' placeholder='Search for Products and Brands' className='w-full border-0 outline-0 bg-transparent placeholder:italic placeholder:font-poppins text-sm' name='search' id='search-bar' />
    </form>
)

export default Searchbar