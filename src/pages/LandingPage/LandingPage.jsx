import React, { useState } from 'react'

import AddressForm from '../../components/AddressForm/AddressForm'
import UsersList from '../../components/UsersList/UsersList'
import CustomButton from '../../components/CustomButton/CustomButton'

const LandingPage = () => {
	const [state, setState] = useState(true)
	const [editingUser, setEditingUser] = useState()

	function handleUserEdit(data) {
		setEditingUser(data)

		setState((prev) => !prev)
	}

	let btnText = state ? 'Show List' : 'Enter New User'

	return (
		<>
			{state ? (
				<AddressForm data={editingUser} />
			) : (
				<UsersList handleEdit={handleUserEdit} /> // get data of user that is being edited
			)}

			<CustomButton
				children={btnText}
				inputProps={{
					'data-testid': 'toggle',
				}}
				handleClick={() => {
					setState((prev) => !prev)
					setEditingUser(false)
				}}
			/>
		</>
	)
}

export default LandingPage
