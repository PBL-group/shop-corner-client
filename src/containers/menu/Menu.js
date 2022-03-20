import React from 'react'
import Item from './Item'

const array = [
    {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
        linkUrl: 'womens'
    },
    {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
        linkUrl: 'jackets'
    },
    {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5,
        linkUrl: 'mens'
    }
]

const Menu = () => {
  return (
    <>
        <div className='mt-16'>
            <h1 className='text-2xl'>Menus for the Products</h1>
        </div>
        <div className='flex justify-center flex-col lg:flex-row py-16 flex-wrap'>
            {
                array.map(data => (
                    <Item {...data} />
                ))
            }
        </div>
    </>
    
  )
}

export default Menu