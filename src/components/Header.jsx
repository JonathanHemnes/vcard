import React from "react"
import styled from "styled-components";
import elyPhoto from "../../static/ely_1.jpg"
import {Text } from "theme-ui";

const HeaderContainer = styled.div`
margin: 20px 0 20px 0;
`

const NameAndTitle = styled.div`
text-align: center
`

const Image = styled.div`
display: flex;
justify-content: center;
img {
	width: 400px;
	border-radius: 20px;
}
`

export function Header() {
	return (
		<HeaderContainer>
		<Image>
			<img src={elyPhoto} alt="" />
		</Image>
			
			<NameAndTitle>
				<Text sx={{fontSize: 5, fontWeight: 'bold'}}>Ely Hemnes</Text>
			</NameAndTitle>
			<NameAndTitle>
				<Text>Founder of The Unfound Door</Text>
			</NameAndTitle>
		</HeaderContainer>
	)
}
