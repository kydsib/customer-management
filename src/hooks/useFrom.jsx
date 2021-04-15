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

const useForm = () => {
	const [newUser, setNewUser] = useState(defaultValues)

	// this one is for switching from user list to form window
	const [showFormWindow, setShowFormWindow] = useState(true)
	const [errorMessage, setErrorMessage] = useState('')
	const [error, setError] = useState(false)
	const [validUsers, setValidUsers] = useState([])
	const [addressObj, setAddressObj] = useState()

	// Should I wrapp geocode to useCallback?
	const { apiError, isLoading, isAddressValid, addressErrorMsg } = useGeocode(
		addressObj
	)

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

	function handleEditClick(id) {
		console.log(`edit is clicked`)
		const editingThisUser = validUsers.filter((user) => user.id === id)[0]
		// TODO figure how to transfer user that is being edited data back to user form
		setShowFormWindow(true)

		setNewUser(editingThisUser)
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

		const { id, fullName, email, ...addresObj } = newUser

		// this will triger geocode API call
		setAddressObj(addresObj)

		if (newUser.email !== undefined) {
			console.log(`submit and reset ran`)
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
		isLoading,
		// testing editing
		handleEditClick,
		showFormWindow,
	}
}

export default useForm
