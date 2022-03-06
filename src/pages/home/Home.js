import React, { useEffect } from 'react'

import Message from '../../components/message/Message'
import { request } from 'graphql-request'
import { updateCollections } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

function Home ({collections, updateCollections}) {	
	
	useEffect(() => {
    const fetchCollections = async () => {
      const { collections } = await request(
        'https://api-eu-central-1.graphcms.com/v2/cl08k9ftx42sd01z3elao1129/master',
        `
          {
            collections {
              id
              name
              products {
                name
                price
                slug
                images {
                  url
                }
                id
              }
              slug
            }
          }
        `
      );

      const convertCollectionsToMaps = collections => {
        const transformedCollections = collections.map(collection => {
          const { name, id, products } = collection;

          return  {
			  slug: encodeURI(name.toLowerCase()),
			  id,
			  name,
			  products
          }
        })
		
		return transformedCollections.reduce((accumulator, collection) => {
			accumulator[collection.name.toLowerCase()] = collection
			return accumulator;
		},{})
      }

	  const collectionsMap = convertCollectionsToMaps(collections)
	  updateCollections(collectionsMap);

    }

    fetchCollections();
  }, [updateCollections]);  

  return (

    <div className='flex gap-8 flex-wrap justify-center'>


      <Message />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)