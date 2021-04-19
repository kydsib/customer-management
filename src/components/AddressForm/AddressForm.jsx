import React from 'react'
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'

import CustomInput from '../CustomInput/CustomInput'
import CustomButton from '../CustomButton/CustomButton'
import useForm from '../../hooks/useFrom'

import Spinner from '../Spinner/Spinner'

// data is user that is being edited
const AddressForm = ({ data }) => {
	const {
		handleChange,
		handleSubmit,
		error,
		errorMessage,
		newUser,
		isLoading,
	} = useForm(data)

	const classes = useStyles()

	let errorMsg = error ? errorMessage : ''

	let errorForAlert = errorMessage ? errorMessage : ''

	return (
		<>
			<form
				className={classes.form}
				onSubmit={handleSubmit}
				autoComplete="off"
			>
				<CustomInput
					handleChange={handleChange}
					placeHolder="Name and Surname"
					label="Full Name"
					name="fullName"
					value={newUser.fullName}
					inputProps={{
						'data-testid': 'nameInput',
					}}
				/>
				<CustomInput
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
				<CustomInput
					handleChange={handleChange}
					placeHolder="City"
					label="City"
					name="city"
					value={newUser.city}
					inputProps={{
						'data-testid': 'city',
					}}
				/>
				<CustomInput
					handleChange={handleChange}
					placeHolder="Street"
					label="Street"
					name="street"
					value={newUser.street}
					inputProps={{
						'data-testid': 'street',
					}}
				/>
				<CustomInput
					handleChange={handleChange}
					placeHolder="House Number"
					label="houseNo"
					name="houseNo"
					value={newUser.houseNo}
					inputProps={{
						'data-testid': 'houseNo',
					}}
				/>
				<CustomInput
					handleChange={handleChange}
					placeHolder="Zip / Postal code"
					label="zip"
					name="zip"
					value={newUser.zip}
					inputProps={{
						'data-testid': 'zip',
					}}
				/>

				<CustomButton children="submit" />
			</form>
			{isLoading ? <Spinner /> : null}

			{errorMessage ? (
				<Alert severity="warning">{errorForAlert}</Alert>
			) : null}
		</>
	)
}

export default AddressForm

const useStyles = makeStyles(() => ({
	form: {
		display: 'flex',
		flexDirection: 'column',
	},
}))
