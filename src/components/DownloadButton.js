import React from "react"
import {Button, Box} from "theme-ui"

export function DownloadButton() {
	function handleDownload() {
		window.location = "/vcard/vcard.vcf"
	}
	return (
		<Box sx={{position: 'fixed', right: '50px', bottom: '40px', zIndex: '1'}}>
		<Button onClick={handleDownload} >Save Contact Data</Button>
		</Box>
	)
}
