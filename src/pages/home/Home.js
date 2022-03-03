import React, { useState, useEffect } from 'react'
import Card from '../../components/card/Card'
import Message from '../../components/message/Message'
import { request } from 'graphql-request'

function Home () {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const { products } = await request(
        'https://api-eu-central-1.graphcms.com/v2/cl08k9ftx42sd01z3elao1129/master',
        `
          {
            products {
              name
              price
              slug
              images {
                url
              }
              id
            }
          }
        `
      );

      setProducts(products);
    };

    fetchProducts();
  }, []);

  return (
    <div className='flex gap-8 flex-wrap justify-center'>
      
      {!products ? (
          'Loading'
        ) : (
          products.map((product) => (
            <Card key={product.id} product={product} />
          ))
        )
      }

      <Message />
    </div>
  )
}

export default Home