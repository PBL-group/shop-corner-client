import React from "react";
import Card from '../card/Card'
import './collection.styles.scss'

const Collection = ({ name, products }) => (
    <div className='collection-preview'>
        <h1 className='title'>{ name.toUpperCase() }</h1>
        <div className='preview'>
            {
                products.filter((item, idx) => idx < 4).map((item) => (
                    <Card key={item.id} item={item} />
                ))
            }
        </div>
    </div>
)

export default Collection