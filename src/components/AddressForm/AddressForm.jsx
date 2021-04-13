import React, { useState } from 'react'

import TextInput from '../TextInput/TextInput'
import CustomButton from '../CustomButton/CustomButton'
import useForm from '../../hooks/useFrom'
import useGeocode from '../../hooks/useGeocode'

const AddressForm = () => {
	// using form works for value update, but component UsersList wont rerender
	// But there might be no need for that. Because it will be shown only when buton will be pressed
	// this would solve pro drilling problem
	const { handleChange, handleSubmit, error, errorMessage } = useForm()
	let errorMsg = error ? errorMessage : ''

	const ddata = { nake: 'jonas' }
	const { isLoading } = useGeocode(ddata)
	console.log(isLoading)

	return (
		<form onSubmit={handleSubmit}>
			<TextInput
				handleChange={handleChange}
				placeHolder="Name and Surname"
				label="Full Name"
				name="fullName"
				inputProps={{
					'data-testid': 'nameInput',
				}}
			/>
			<TextInput
				handleChange={handleChange}
				placeHolder="email@example.com"
				label="Email"
				name="email"
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
				inputProps={{
					'data-testid': 'city',
				}}
			/>
			<TextInput
				handleChange={handleChange}
				placeHolder="Street"
				label="Street"
				name="street"
				inputProps={{
					'data-testid': 'street',
				}}
			/>
			<TextInput
				handleChange={handleChange}
				placeHolder="House Number"
				label="houseNo"
				name="houseNo"
				inputProps={{
					'data-testid': 'houseNo',
				}}
			/>
			<TextInput
				handleChange={handleChange}
				placeHolder="Zip / Postal code"
				label="zip"
				name="zip"
				inputProps={{
					'data-testid': 'zip',
				}}
			/>

			<CustomButton children="SUBMIT" />
		</form>
	)
}

export default AddressForm
