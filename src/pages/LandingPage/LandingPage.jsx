import React, { useState } from 'react'

import AddressForm from '../../components/AddressForm/AddressForm'
import UsersList from '../../components/UsersList/UsersList'
import useForm from '../../hooks/useFrom'

const LandingPage = () => {
	return (
		<>
			<AddressForm />
			{/* <UsersList users={validUsers} /> */}
		</>
	)
}

export default LandingPage
