import React, { useRef } from 'react'

import TextInput from '../TextInput/TextInput'
import CustomButton from '../CustomButton/CustomButton'
import useForm from '../../hooks/useFrom'
import useGeocode from '../../hooks/useGeocode'

const AddressForm = () => {
	// using form works for value update, but component UsersList wont rerender
	// But there might be no need for that. Because it will be shown only when buton will be pressed
	// this would solve pro drilling problem
	const {
		handleChange,
		handleSubmit,
		error,
		errorMessage,
		newUser,
	} = useForm()

	let errorMsg = error ? errorMessage : ''
	// const ddata = { nake: 'jonas' }
	// const { isLoading } = useGeocode(ddata)
	// console.log(isLoading)

	return (
		<form onSubmit={handleSubmit} autoComplete="off">
			<TextInput
				handleChange={handleChange}
				placeHolder="Name and Surname"
				label="Full Name"
				name="fullName"
				value={newUser.fullName}
				inputProps={{
					'data-testid': 'nameInput',
				}}
			/>
			<TextInput
				handleChange={handleChange}
				placeHolder="email@example.com"
				label="Email"
				name="email"
				value={newUser.email}
				error={error}
				helperText={errorMsg}
				inputProps={{
					'data-testid': 'email',
				}}
			/>
			<TextInput
				handleChange={handleChange}
				placeHolder="City"
				label="City"
				name="city"
				value={newUser.city}
				inputProps={{
					'data-testid': 'city',
				}}
			/>
			<TextInput
				handleChange={handleChange}
				placeHolder="Street"
				label="Street"
				name="street"
				value={newUser.street}
				inputProps={{
					'data-testid': 'street',
				}}
			/>
			<TextInput
				handleChange={handleChange}
				placeHolder="House Number"
				label="houseNo"
				name="houseNo"
				value={newUser.houseNo}
				inputProps={{
					'data-testid': 'houseNo',
				}}
			/>
			<TextInput
				handleChange={handleChange}
				placeHolder="Zip / Postal code"
				label="zip"
				name="zip"
				value={newUser.zip}
				inputProps={{
					'data-testid': 'zip',
				}}
			/>

			<CustomButton children="SUBMIT" />
		</form>
	)
}

export default AddressForm
