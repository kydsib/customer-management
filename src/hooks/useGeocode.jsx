// import { FastfoodOutlined } from '@material-ui/icons'
import { useState, useEffect } from 'react'

const useGeocode = ({ address }) => {
	const [isLoading, setIsLoading] = useState(false)
	const [apiError, setApiError] = useState(false)
	const [addressValid, setAddressValid] = useState(false)

	useEffect(() => {
		// TODO decide where and when API should be called
		// TODO extract values from address
		const fullAddress = 'Gedimiminaiciu 911 Vilnijus LT231234'
		// extract values form addres to one sring
		const MY_API_KEY = ''

		async function getAdressApproval() {
			setIsLoading(true)
			setApiError(false)

			try {
				const response = await fetch(
					`https://maps.googleapis.com/maps/api/geocode/json?address=${fullAddress}&key=${MY_API_KEY}`
				)

				if (response.status === 200) {
					let data = await response.json()
					console.log(data)
				}

				setIsLoading(false)
			} catch (error) {
				setApiError(true)
				console.log(error)
			}
		}

		getAdressApproval()
	}, [address])

	return { apiError, isLoading, addressValid }
}

export default useGeocode
