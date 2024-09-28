import React from "react"
import Flex from "./Flex"

const InputBox = ({ textarea = false, required = false, heading, className, ...props }) => {
    const inputClassName = `py-6 pl-8 placeholder:font-inter placeholder:font-regular placeholder:text-[#A1A1A1]
            border-2 border-dark6 rounded-md focus:outline-dark4 font-inter font-regular text-dark2`
	return (
		<Flex className={"w-full flex-col gap-4"}>
			<h3 className='font-inter font-semibold text-dark2 text-xl'>
				{required ? `${heading}*` : heading}
			</h3>
			{textarea ? (
				<textarea className= {`${inputClassName} ${className}`}
                {...props}/>
			) : (
				<input
					className= {`${inputClassName} ${className}`}
					{...props}
				/>
			)}
		</Flex>
	)
}

export default InputBox
