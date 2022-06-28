import React from "react"
import { ContactInfo, Header } from "../components"
import styled from "styled-components";


const DisplayBox = styled.div`
display:flex;
justify-content: space-around;
`

const ContactBox = styled.div`
width: 40vh;
padding: 50px;
`

export default function Home() {
	return (
		<DisplayBox>
		<ContactBox>
		<Header/>
		<ContactInfo />
		</ContactBox>
		</DisplayBox>
	)
}
