import React from "react"
import { FaPhoneVolume } from "react-icons/fa6"
import { FaMapMarkerAlt } from "react-icons/fa"
import { FaClock } from "react-icons/fa6"
import Flex from "./Flex"
import ContactCard from "./ContactCard"

const ContactItems = () => {

	return (
		<Flex className={"justify-center gap-6 flex-wrap gap-y-10"}>
			<ContactCard
				icon={FaPhoneVolume}
				heading={"PHONE"}
				content={"+38 (012) 34 56 789"}
			></ContactCard>
			<ContactCard
				icon={FaMapMarkerAlt}
				heading={"ADDRESS"}
				content={"+38 (012) 34 56 789"}
			></ContactCard>
			<ContactCard
				icon={FaClock}
				heading={"WORKING HOURS"}
				content={"Mon - Fri: 08:00 - 22:00 Sat - Sun: 10:00 - 23:00"}
			></ContactCard>
		</Flex>
	)
}

export default ContactItems
