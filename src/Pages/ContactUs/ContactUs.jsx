import React from "react"
import Container from "../../Utils/Container"
import Flex from "../../components/ContactUs/Flex"
import Heading from "../../components/ContactUs/Heading"
import ContactItems from "../../components/ContactUs/ContactItems"



const Contact_Us = () => {
	return (
		<Container>
			<Heading primary_text={"OUR LOCATION"} secondary_text={"---Visit Us---"}></Heading>
			<ContactItems></ContactItems>
			<Heading primary_text={"CONTACT FORM"} secondary_text={"---Send Us a Message---"}></Heading>

		</Container>
	)
}

export default Contact_Us
