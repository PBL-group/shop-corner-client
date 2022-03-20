import React from 'react'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import Brands from '../../containers/brands/Brands'
// import Hero from '../../containers/hero/Hero'
function Home () {	
	return (
		<div className='flex justify-center'>
			<div className='container w-full'>
				{/* <Hero /> */}
				<CollectionsOverview />
				<Brands />
			</div>
		</div>
		
	)
}



export default Home