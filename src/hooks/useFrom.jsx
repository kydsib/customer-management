import { useState, useEfect } from 'react'

const useForm = () => {
	const [newUser, setNewUser] = useState()
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
	function handleChange(event) {
		// TODO fix this id handling it will be problem when editing adress
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
	return { validUsers, handleChange, handleSubmit }
}

export default useForm
