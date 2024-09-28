import React from 'react'
import Flex from './Flex'

const Heading = ({primary_text, secondary_text}) => {
	return (
		<Flex className={"flex-col items-center mt-32 mb-12"}>
			<h2 className='font-inter text-[#D99904] text-lg italic'>{secondary_text}</h2>
			<div className='text-center py-5 px-14 border-t-4 border-b-4 border-dark6 mt-4'>
				<h3 className='font-inter text-4xl text-dark1'>{primary_text}</h3>
			</div>
		</Flex>
        
	)
}

export default Heading