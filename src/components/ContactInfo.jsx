import React from "react"
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faChain } from "@fortawesome/free-solid-svg-icons";
import {DownloadButton} from "./DownloadButton";
import {Box, Link, Flex} from "theme-ui"


const ContactContainer = styled.div`
`

const ContactItem = styled.div`
display: flex;
gap: 10px;
margin: 10px 0 10px 0;
`

export function ContactInfo() {
	return (
		<Box sx={{margin: ['0 10px 0 10px','0 20px 0 20px','0 30px 0 30px']}}>
		<ContactItem>
		<FontAwesomeIcon icon={faPhone} />
		<Link href="tel:6177759911">617-775-9911</Link>
		</ContactItem>
		<ContactItem>
		<FontAwesomeIcon icon={faEnvelope} />
		<Link href="email:ely@theunfounddoor.com">ely@theunfounddoor.com</Link>
		</ContactItem>
		<ContactItem>
		<FontAwesomeIcon icon={faChain} />
		<Link href="theunfounddoor.com">theunfounddoor.com</Link>
		</ContactItem>
		<DownloadButton />
		</Box>
	)
}
