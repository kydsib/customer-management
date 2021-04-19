import { useState, useEffect } from 'react'

const useGeocode = (address) => {
	const [isLoading, setIsLoading] = useState(false)
	const [addressErrorMsg, setAddressErrorMsg] = useState('')
	const [apiError, setApiError] = useState(false)
	const [isAddressValid, setIsAddressValid] = useState(false)

	useEffect(() => {
		if (address === undefined) return

		if (address.id === '') {
			setIsAddressValid(false)
			return
		}

		const addressForApi = Object.values(address).join(' ')
		const charsToRemove = /[&\-_;/\\#,+()$~%.'":*?<>{}]/g

		// need to separate street and it's abreviation g., st., al etc. splice is to remove zip
		const userAddressInput = addressForApi
			.toLowerCase()
			.replace(charsToRemove, '')
			.split(' ')
			.slice(0, -1)

		const MY_API_KEY = 'AIzaSyBomrmX0kILUditS9QOlF5nNOYce-es4n4'

		async function getAdressApproval() {
			setIsLoading(true)
			setApiError(false)

			try {
				const response = await fetch(
					`https://maps.googleapis.com/maps/api/geocode/json?address=${addressForApi}&key=${MY_API_KEY}`
				)

				if (
					response.status === 200 &&
					response.status === 'ZERO_RESULTS'
				) {
					setAddressErrorMsg('Address is invadid')
					setIsAddressValid(false)
					return
				}

				if (response.status === 200) {
					let data = await response.json()
					console.log(data)
					// check if multiple possible addresses rturned
					const multipleAddressesReturned = data.results.length > 1
					if (multipleAddressesReturned) {
						setIsAddressValid(false)
						setAddressErrorMsg(
							'Provided address is not accurate enough'
						)
					}

					const formatedAddressResponse = data.results[0].formatted_address
						.split(' ')
						.map((item) =>
							item.toLowerCase().replace(charsToRemove, '')
						)

					const mathedAddressParts = userAddressInput.filter((item) =>
						formatedAddressResponse.includes(item)
					)

					if (mathedAddressParts.length === userAddressInput.length) {
						setApiError(true)
						setIsAddressValid(true)
						setAddressErrorMsg('')
					}

					if (mathedAddressParts.length !== userAddressInput.length) {
						const partsNotFound = userAddressInput.filter(
							(item) => !formatedAddressResponse.includes(item)
						)

						const wahatWasFound = data.results[0].formatted_address
						setApiError(true)
						setIsAddressValid(false)
						const errorText = `We were unable to find ${partsNotFound}. Closest that we found was ${wahatWasFound}`
						setAddressErrorMsg(errorText)
						// should I also go trough secondary data?
					}
				}

				setIsLoading(false)
			} catch (error) {
				setApiError(true)
				setAddressErrorMsg(error)
			}
		}
		getAdressApproval()
	}, [address])

	return { apiError, isLoading, isAddressValid, addressErrorMsg }
}

export default useGeocode
