import React, { useEffect, useRef, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { FaTelegramPlane } from 'react-icons/fa';
import Flex from "./Flex";
import InputBox from "./InputBox";


const ContactForm = () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [message, setMessage] = useState("")
    
    const [captchaLoaded, setCaptchaLoaded] = useState(false)

	const captchaRef = useRef()

    useEffect(() => {
        setCaptchaLoaded(true)
    },[])

	return (
		<form className='w-full bg-dark7 p-20 mb-[400px]'>
			<Flex className={"w-full flex-col gap-6"}>
				<Flex className={"w-full gap-6"}>
					<Flex className={"w-[49%]"}>
						<InputBox
							heading={"Name"}
							type={"text"}
							required={true}
							placeholder={"Enter your name"}
							name={"contact_name"}
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</Flex>
					<Flex className={"w-[49%]"}>
						<InputBox
							heading={"Email"}
							type={"email"}
							required={true}
							placeholder={"Enter your email"}
							name={"contact_email"}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Flex>
				</Flex>
				<InputBox
					heading={"Phone"}
					type={"tel"}
					required={true}
					placeholder={"Enter your phone number"}
					name={"contact_phone"}
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
				/>
				<InputBox
					textarea={true}
					className={"h-[300px]"}
					heading={"Message"}
					required={true}
					placeholder={"Write your message here"}
					name={"contact_message"}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
                {captchaLoaded && (
                    
				<ReCAPTCHA
					sitekey='6LdcyVAqAAAAACYJgIKvUDBTP4Q-e7qFLd6RGbOo'
					onChange={(e) => {
						console.log(e)
					}}
					ref={captchaRef}
				></ReCAPTCHA>
                )}
			</Flex>
			<Flex className={"w-full justify-center mt-32"}>
				<button className='w-fit flex gap-2 items-center px-5 py-4 bg-gradient-to-tr from-[#835D23] to-[#B58130] text-white font-inter font-bold text-lg hover:from-[#835D23]  hover:to-[#835D23] transition-all duration-300'>
					Send Message <FaTelegramPlane className='w-6 h-6' />
				</button>
			</Flex>
		</form>
	)
}

export default ContactForm
