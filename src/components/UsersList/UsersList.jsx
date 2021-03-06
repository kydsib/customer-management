import React from 'react'
import Grid from '@material-ui/core/Grid'
import Alert from '@material-ui/lab/Alert'

import useForm from '../../hooks/useFrom'
import UserDataCard from '../UserDataCard/UserDataCard'

const UsersList = ({ handleEdit }) => {
	const { validUsers } = useForm()

	const noUsers =
		validUsers?.length === 0 ? (
			<Alert severity="info">There are no users yet</Alert>
		) : null

	return (
		<>
			<Grid key="container" container spacing={2}>
				{validUsers
					? validUsers.map((user) => (
							<Grid
								key={user.id}
								item
								lg={3}
								md={4}
								sm={6}
								xs={12}
							>
								<UserDataCard
									handleEdit={handleEdit}
									user={user}
								/>
							</Grid>
					  ))
					: null}
			</Grid>
			{noUsers}
		</>
	)
}

export default UsersList
