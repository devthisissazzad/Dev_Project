import React from "react"
import Container from "../../Utils/Container/Container"
import Heading from "./ContactComponents/Heading"
import ContactItems from "./ContactComponents/ContactItems"
import ContactForm from "./ContactComponents/ContactForm"
import { Slide, ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Contact = () => {
	return (
		<Container>
			<ToastContainer
				position='top-center'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable={false}
				pauseOnHover={false}
				theme='light'
				transition={Slide}
			/>
			<Heading primary_text={"OUR LOCATION"} secondary_text={"---Visit Us---"}></Heading>
			<ContactItems></ContactItems>
			<Heading
				primary_text={"CONTACT FORM"}
				secondary_text={"---Send Us a Message---"}
			></Heading>
			<ContactForm></ContactForm>
		</Container>
	)
}

export default Contact
