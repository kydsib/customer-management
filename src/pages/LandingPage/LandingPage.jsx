import React, { useState } from 'react'

import AddressForm from '../../components/AddressForm/AddressForm'
import UsersList from '../../components/UsersList/UsersList'
import useForm from '../../hooks/useFrom'

const LandingPage = () => {
	const [newUser, setNewUser] = useState()
	const [validUsers, setValidUsers] = useState([
		{
			id: 1,
			fullName: 'Me',
			city: 'Vilnius',
		},
	])

	function kindARandomId() {
		return new Date().valueOf()
	}

	function handleChange(event) {
		const { name, value } = event.target

		setNewUser({
			...newUser,
			id: kindARandomId(),
			[name]: value,
		})
	}

	function handleSubmit(event) {
		event.preventDefault()

		// make address validation request
		console.log('form is submited')
		let oldValues = [...validUsers]
		// let id = kindARandomId()

		oldValues.push(newUser)

		setValidUsers(oldValues)
		console.log(validUsers)
		//reset form
	}
	//
	return (
		<>
			<AddressForm
			// handleChange={handleChange}
			// handleSubmit={handleSubmit}
			/>
			{/* <UsersList users={validUsers} /> */}
		</>
	)
}

export default LandingPage
