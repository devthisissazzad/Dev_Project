import React from "react"
import Container from "../../Utils/Container/Container"
import Heading from "./ContactComponents/Heading"
import ContactItems from "./ContactComponents/ContactItems"
import ContactForm from "./ContactComponents/ContactForm"

const Contact = () => {
	return (
		<Container>
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
