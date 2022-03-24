import React from 'react'
import './error.scss'

const Error = () => {
	return (
		<div className='flex flex-col justify-between align-center h-[50vh]'>
			<section className="error-container">
				<span className="four"><span className="screen-reader-text">4</span></span>
				<span className="zero"><span className="screen-reader-text">0</span></span>
				<span className="four"><span className="screen-reader-text">4</span></span>
			</section>   
			<div className='flex justify-center'>
				<h1 className='text-red-600 text-2xl uppercase'>the Resource you requested is not found</h1>
			</div>
		</div>
	)
}

export default Error