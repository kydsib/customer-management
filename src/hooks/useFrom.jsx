import { useState, useEffect } from 'react'

import useGeocode from './useGeocode'

const defaultValues = {
	id: '',
	fullName: '',
	email: '',
	city: '',
	street: '',
	houseNo: '',
	zip: '',
}

const useForm = (data) => {
	const newUserValues = data ? data : defaultValues
	const [newUser, setNewUser] = useState(newUserValues)
	const [errorMessage, setErrorMessage] = useState('')
	const [error, setError] = useState(false)
	const [validUsers, setValidUsers] = useState([])
	const [addressObj, setAddressObj] = useState()

	const { apiError, isLoading, isAddressValid, addressErrorMsg } = useGeocode(
		addressObj
	)

	useEffect(() => {
		// newUser.id !== '' prevents empty object being stored
		if (isAddressValid && newUser.id !== '') {
			const dataFromLs = JSON.parse(localStorage.getItem('address'))
			const currentData = dataFromLs ? dataFromLs : []
			const withoutCurrentEdit = currentData.filter(
				(user) => user.id !== newUser.id
			)

			withoutCurrentEdit.push(newUser)
			setValidUsers(withoutCurrentEdit)

			localStorage.setItem('address', JSON.stringify(withoutCurrentEdit))
			setError(false)

			setNewUser(defaultValues)
			// this triggers useGeocode and resets isAddressValid to false
			setAddressObj(defaultValues)
		}
	}, [isAddressValid, addressObj, newUser])

	useEffect(() => {
		setErrorMessage(addressErrorMsg)
	}, [apiError, isAddressValid, addressErrorMsg, isLoading])

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

		if (name === 'email') {
			setError(false)
			setErrorMessage('')
		}

		if (newUser.id) {
			// if data is being edited, id remains the same
			setNewUser({
				...newUser,
				[name]: value,
			})
		} else {
			setNewUser({
				...newUser,
				id: new Date().valueOf(),
				[name]: value,
			})
		}
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

		// !data lets us save user with same email when editing existing user
		if (!isEmailOriginal() && !data) {
			setError(true)
			setErrorMessage('This email is already taken')
			return
		}
		if (!validateEmail(newUser.email)) {
			setError(true)
			setErrorMessage('Invalid email format')
			return
		}

		const { id, fullName, email, ...addresObj } = newUser

		// this will triger geocode API call
		setAddressObj(addresObj)
	}

	return {
		validUsers,
		handleChange,
		handleSubmit,
		error,
		errorMessage,
		newUser,
		isLoading,
	}
}

export default useForm
