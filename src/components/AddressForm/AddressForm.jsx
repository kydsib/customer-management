import React, { useState } from 'react'

import TextInput from '../TextInput/TextInput'
import CustomButton from '../CustomButton/CustomButton'
import useForm from '../../hooks/useFrom'

const AddressForm = () => {
	// using form works for value update, but component UsersList wont rerender
	// But there might be no need for that. Because it will be shown only when buton will be pressed
	// this would solve pro drilling problem
	const { handleChange, handleSubmit } = useForm()

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
				placeHolder="Housen No"
				label="houseNo"
				name="houseNo"
			/>
			<TextInput
				handleChange={handleChange}
				placeHolder="Zip code"
				label="zip"
				name="zip"
			/>
			<CustomButton
				children="SUBMIT"
				inputProps={{
					'data-testid': 'btn-submit',
				}}
			/>
		</form>
	)
}

export default AddressForm
