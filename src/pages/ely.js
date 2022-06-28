import React from "react"
import { ContactInfo, Header } from "../components"
import styled from "styled-components";
import {Helmet} from "react-helmet"
import {Box} from "theme-ui"


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
		<>
		<Helmet title="Ely Hemnes" />
		<DisplayBox>
		<Box sx={{width: ['100vh','50vh','33vh']}}>
		<Header/>
		<ContactInfo />
		</Box>
		</DisplayBox>
		</>
	)
}
