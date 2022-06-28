import React from "react"
import {Button} from "theme-ui"

export function DownloadButton() {
	function handleDownload() {
		window.location = "/vcard.vcf"
	}
	return (
		<>
		<Button onClick={handleDownload}>Save Contact Data</Button>
		</>
	)
}
