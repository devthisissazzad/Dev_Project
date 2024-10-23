import React from 'react'

const Flex = ({ children, className, ...props }) => {
	return (
		<div {...props} className={`${className} flex`}>
			{children}
		</div>
	)
}

export default Flex
