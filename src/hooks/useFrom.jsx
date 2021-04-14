import { useState, useEffect, useRef } from 'react'

// import useGeocode from './useGeocode'

const defaultValues = {
	city: '',
	email: '',
	fullName: '',
	houseNo: '',
	id: '',
	street: '',
	zip: '',
}

const useForm = () => {
	const [newUser, setNewUser] = useState(defaultValues)
	// do I need error at all or error message is enough?
	const [error, setError] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')
	const [validUsers, setValidUsers] = useState([])

	function getValueFromLS(key) {
		const storage = localStorage.getItem(key)

		if (storage && storage !== null)
			return setValidUsers(JSON.parse(storage))
	}

	useEffect(() => {
		getValueFromLS('address')
	}, [])

	function validateEmail(email) {
		let validFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		if (!email.match(validFormat)) {
			return false
		} else {
			return true
		}
	}

	function handleChange(event) {
		const { name, value } = event.target

		// resetting the error msg for email field
		if (name === 'email') {
			setError(false)
			setErrorMessage('')
		}

		setNewUser({
			...newUser,
			// generating kind a random id
			id: new Date().valueOf(),
			[name]: value,
		})
	}

	function isEmailOriginal() {
		const duplicate = validUsers.filter(
			(item) => item.email === newUser.email
		)

		if (validUsers.length === 0 || duplicate.length < 1) return true
		return false
	}

	function handleSubmit(event) {
		event.preventDefault()

		if (!isEmailOriginal()) {
			setError(true)
			setErrorMessage('This email is already taken')
			return
		}
		if (!validateEmail(newUser.email)) {
			setError(true)
			setErrorMessage('Invalid email format')
			return
		}

		if (newUser.email !== undefined) {
			let oldValues = [...validUsers]
			setError(false)
			setErrorMessage('')

			oldValues.push(newUser)
			setValidUsers(oldValues)

			localStorage.setItem('address', JSON.stringify(oldValues))
			setNewUser(defaultValues)
		}
	}

	return {
		validUsers,
		handleChange,
		handleSubmit,
		error,
		errorMessage,
		newUser,
	}
}

export default useForm
