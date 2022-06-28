import React from "react"
import {Button, Box} from "theme-ui"

export function DownloadButton() {
	function handleDownload() {
		window.location = "/vcard/vcard_ely_hemnes.vcf"
	}
	return (
		<Box sx={{position: 'fixed', right: [ '20px', '40px', '50px'  ], bottom: [  '10px', '25px', '40px' ], zIndex: '1'}}>
		<Button onClick={handleDownload} >Save Contact Data</Button>
		</Box>
	)
}
