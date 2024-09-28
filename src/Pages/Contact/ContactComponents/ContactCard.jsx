import React from 'react'
import Flex from './Flex'

const ContactCard = ({ icon: Icon, heading, content }) => {
	return (
		<Flex className={"items-center flex-col w-[350px]"}>
			<Flex className='w-full py-6 justify-center items-center bg-[#D1A054]'>
                <Icon className='w-6 h-6 text-white'></Icon>
			</Flex>
			<div className='w-full px-7 pb-7 border-2 border-dark6'>
				<Flex
					className={"bg-dark7 justify-center items-center flex-col font-inter pt-10 pb-20"}
				>
					<h3 className='font-medium text-dark1 text-2xl'>{heading}</h3>
					<span className='text-dark2 text-base mt-4 w-[200px] text-center'>{content}</span>
				</Flex>
			</div>
		</Flex>
		
	)
	
}

export default ContactCard