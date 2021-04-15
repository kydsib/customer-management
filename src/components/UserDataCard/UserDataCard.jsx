import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import LocationCityIcon from '@material-ui/icons/LocationCity'
import EditIcon from '@material-ui/icons/Edit'

import useForm from '../../hooks/useFrom'

export default function UserDataCard({ user }) {
	const { handleEditClick } = useForm()
	const classes = useStyles()

	const { city, email, fullName, houseNo, street, zip, id } = user

	return (
		<Card className={classes.root}>
			<CardHeader
				title={fullName}
				subheader={email}
				action={
					<IconButton
						onClick={() => handleEditClick(id)}
						aria-label="edit"
					>
						<EditIcon />
					</IconButton>
				}
			/>

			<CardContent>
				<Typography variant="body2" color="textSecondary">
					<ListItemIcon>
						<LocationCityIcon />
					</ListItemIcon>
					<ListItemText primary={city} />
				</Typography>
				<Typography variant="body2" color="textSecondary">
					<ListItemIcon>
						<HomeIcon color="action" />
					</ListItemIcon>
					<ListItemText primary={`${street} ${houseNo} - ${zip}`} />
				</Typography>
			</CardContent>
		</Card>
	)
}

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 'auto',
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	edit: {
		marginLeft: 'auto',
	},
}))
