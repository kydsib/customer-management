import React, { useState, useEffect } from 'react'

import AddressForm from '../../components/AddressForm/AddressForm'
import UsersList from '../../components/UsersList/UsersList'
import useForm from '../../hooks/useFrom'
import CustomButton from '../../components/CustomButton/CustomButton'

const LandingPage = () => {
	// need to figure how switch between address and user list
	const { showFormWindow } = useForm()
	const [state, setState] = useState(showFormWindow)

	const btnText = state ? 'Show List' : 'Enter New User'

	useEffect(() => {
		console.log(`${showFormWindow} changed in landingPage`)
	}, [showFormWindow])

	return (
		<>
			{state ? <AddressForm /> : <UsersList />}

			<CustomButton
				children={btnText}
				handleClick={() => setState((prev) => !prev)}
			/>
		</>
	)
}

export default LandingPage
