import React from "react";
import Card from '../card/Card'

const Collection = ({ name, products }) => (
    <div className='flex flex-col mb-8'>
        <h1 className='text-lg mb-6'>{ name.toUpperCase() }</h1>
        <div className='flex flex-wrap gap-4'>
            {
                products.map((item) => (
                    <Card key={item.id} item={item} />
                ))
            }
        </div>
    </div>
)

export default Collection