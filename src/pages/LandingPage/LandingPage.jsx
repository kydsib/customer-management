import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

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
	let headingText = state ? 'Enter new user address' : 'List of saved users'
	const classes = useStyles()
	return (
		<>
			<AppBar className={classes.heading} position="static">
				<Toolbar variant="dense">
					<Typography variant="h6" color="inherit">
						{headingText}
					</Typography>
				</Toolbar>
			</AppBar>
			{state ? (
				<AddressForm data={editingUser} />
			) : (
				<UsersList handleEdit={handleUserEdit} /> // get data of user that is being edited
			)}

			<CustomButton
				children={btnText}
				handleClick={() => {
					setState((prev) => !prev)
					setEditingUser(false)
				}}
			/>
		</>
	)
}

export default LandingPage

const useStyles = makeStyles(() => ({
	heading: {
		marginBottom: '1.5rem',
		alignItems: 'center',
	},
}))
