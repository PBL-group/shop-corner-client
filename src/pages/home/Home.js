import React from 'react'
import Message from '../../components/message/Message'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';

function Home () {	
	return (
		<div className='flex justify-center'>
			<div className='container w-full'>
				<CollectionsOverview />
				<Message />
			</div>
		</div>
		
	)
}



export default Home