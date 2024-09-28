import React, { useEffect, useRef, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { FaTelegramPlane } from 'react-icons/fa';
import Flex from "./Flex";
import InputBox from "./InputBox";
import { toast } from "react-toastify";


const ContactForm = () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [message, setMessage] = useState("")
	const [captchaValue, setCaptchaValue] = useState("")
    
    const [captchaLoaded, setCaptchaLoaded] = useState(false)

	const captchaRef = useRef()

	const handleSubmitMessage = (e)=>{
		e.preventDefault()
		if (!name || !email || !phone || !message) {
			toast.error("Please fill all the fields")
			return
		}

		if (!captchaValue) {
			toast.error("Please solve the captcha")
			return
		}

		toast.success("Message sent successfully")
		setName("")
		setMessage("")
		setEmail("")
		setPhone("")
		captchaRef.current.reset()
	}

    useEffect(() => {
        setCaptchaLoaded(true)
    },[])

	return (
		<form className='w-full bg-dark7 lg:p-20 p-6 mb-[400px]'>
			<Flex className={"w-full flex-col gap-6"}>
				<Flex className={"w-full justify-between flex-wrap"}>
					<Flex className={"lg:w-[49%] w-full"}>
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
					<Flex className={"lg:w-[49%] w-full"}>
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
                <Flex className={"w-fit lg:scale-100 scale-[0.8] origin-top-left"}>

					<ReCAPTCHA
						sitekey='6LdcyVAqAAAAACYJgIKvUDBTP4Q-e7qFLd6RGbOo'
						onChange={(e) => {
							setCaptchaValue(e)
						}}
						ref={captchaRef}
						
					></ReCAPTCHA>
					</Flex>
                )}
			</Flex>
			<Flex className={"w-full justify-center lg:mt-32 mt-20"}>
				<button className='w-fit flex gap-2 items-center px-5 py-4 bg-gradient-to-tr from-[#835D23] to-[#B58130] text-white font-inter font-bold text-lg hover:from-[#835D23]  hover:to-[#835D23] transition-all duration-300' onClick={handleSubmitMessage}>
					Send Message <FaTelegramPlane className='w-6 h-6' />
				</button>
			</Flex>
		</form>
	)
}

export default ContactForm
