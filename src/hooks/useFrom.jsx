import { useState, useEfect } from 'react'

// import useGeocode from './useGeocode'

const useForm = () => {
	const [newUser, setNewUser] = useState()
	// do I need error at all or error message is enough?
	const [error, setError] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')
	const [validUsers, setValidUsers] = useState([
		{
			id: 1,
			name: 'Me',
			city: 'Vilnius',
		},
	])
	function kindARandomId() {
		return new Date().valueOf()
	}

	function validateEmail(email) {
		let validFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

		if (!email.match(validFormat)) {
			return false
		} else {
			return true
		}
	}

	function handleChange(event) {
		const { name, value } = event.target

		setNewUser({
			...newUser,
			[name]: value,
		})
	}

	function handleSubmit(event) {
		event.preventDefault()

		// throw error when email is not valid
		if (newUser.email !== undefined && validateEmail(newUser.email)) {
			let oldValues = [...validUsers]
			setError(false)
			setErrorMessage('')
			newUser.id
				? oldValues.push(newUser)
				: oldValues.push({ ...newUser, id: kindARandomId() })
			// oldValues.push({...newUser, id: kindARandomId()})
			setValidUsers(oldValues)
		} else {
			setError(true)
			setErrorMessage('Invalid email format')
		}

		// check for email duplicate in DB
		console.log(validUsers)

		// validatae address w/ google maps api
		// const {isLoading} = useGeocode(newUser)
		//

		//reset form
	}
	return { validUsers, handleChange, handleSubmit, error, errorMessage }
}

export default useForm
