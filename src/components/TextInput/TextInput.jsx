import React from 'react'
import TextField from '@material-ui/core/TextField'

const TextInput = ({
	variant = 'outlined',
	label,
	name,
	handleChange,
	// testId,
	placeHolder,
	value,
	type = 'text',
	inputProps,
}) => {
	return (
		<TextField
			type={type}
			name={name}
			label={label}
			variant={variant}
			onChange={handleChange}
			placeholder={placeHolder}
			value={value}
			inputProps={inputProps}
		/>
	)
}

export default TextInput
