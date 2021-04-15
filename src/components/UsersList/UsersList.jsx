import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import useForm from '../../hooks/useFrom'
import UserDataCard from '../UserDataCard/UserDataCard'

const UsersList = () => {
	const { validUsers } = useForm()
	const classes = useStyles()

	return (
		<Grid key="container" container spacing={2} className={classes.root}>
			{validUsers
				? validUsers.map((user) => (
						<Grid key={user.id} item lg={3} md={4} sm={6} xs={12}>
							<UserDataCard user={user} />
						</Grid>
				  ))
				: null}
		</Grid>
	)
}

export default UsersList

const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1,
	},
}))
