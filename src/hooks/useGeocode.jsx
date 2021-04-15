import { useState, useEffect } from 'react'

const useGeocode = (address) => {
	const [isLoading, setIsLoading] = useState(false)
	const [addressErrorMsg, setAddressErrorMsg] = useState('')
	const [apiError, setApiError] = useState(false)
	const [isAddressValid, setIsAddressValid] = useState(true)

	useEffect(() => {
		if (address === undefined) return
		const addressForApi = Object.values(address).join(' ')

		// need to separate street and it's abreviation g., st., al etc. also removing zip form address validation
		const userAddressInput = addressForApi
			.toLowerCase()
			.split(' ')
			.slice(0, -1)

		console.log(userAddressInput)
		const MY_API_KEY = ''

		async function getAdressApproval() {
			setIsLoading(true)
			setApiError(false)

			try {
				const response = await fetch(
					`https://maps.googleapis.com/maps/api/geocode/json?address=${addressForApi}&key=${MY_API_KEY}`
				)

				if (response.status === 'ZERO_RESULTS') {
					setAddressErrorMsg('Address is invadid')
					return
				}

				if (response.status === 200) {
					let data = await response.json()
					console.log(data)
					// check if multiple posible addresses rturned
					const multipleAddressesReturned = data.results.length > 1
					if (multipleAddressesReturned) {
						setIsAddressValid(true)
						setAddressErrorMsg(
							'Provided address is not accurate enough'
						)
					}

					const charsToRemove = /[&\-_;/\\#,+()$~%.'":*?<>{}]/g
					const formatedAddressResponse = data.results[0].formatted_address
						.split(' ')
						.map((item) =>
							item.toLowerCase().replace(charsToRemove, '')
						)

					const mathedAddressParts = userAddressInput.filter((item) =>
						formatedAddressResponse.includes(item)
					)

					if (mathedAddressParts.length === userAddressInput.length) {
						console.log(`addresses matched in geocode`)
						setApiError(true)
						setIsAddressValid(true)
					}

					if (mathedAddressParts.length !== userAddressInput.length) {
						console.log(`Address do not match `)
						const partsNotFound = userAddressInput.filter(
							(item) => !formatedAddressResponse.includes(item)
						)

						setApiError(true)
						setIsAddressValid(false)
						const errorText = `We were unable to find ${partsNotFound}`
						setAddressErrorMsg(errorText)

						// do other stuff

						// should I also go trough secondary data?
					}
				}

				setIsLoading(false)
			} catch (error) {
				setApiError(true)
				console.log(error)
			}
		}

		getAdressApproval()
	}, [address])

	return { apiError, isLoading, isAddressValid, addressErrorMsg }
}

export default useGeocode
