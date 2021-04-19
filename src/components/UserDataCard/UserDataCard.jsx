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

export default function UserDataCard({ user, handleEdit }) {
	const classes = useStyles()

	const { city, email, fullName, houseNo, street, zip } = user

	return (
		<Card className={classes.root}>
			<CardHeader
				title={fullName}
				subheader={email}
				action={
					<IconButton
						onClick={() => handleEdit(user)}
						aria-label="edit"
					>
						<EditIcon />
					</IconButton>
				}
			/>

			<CardContent className={classes.listItem}>
				<ListItemIcon>
					<LocationCityIcon />
				</ListItemIcon>
				<ListItemText primary={city} />
				<Typography variant="body2" color="textSecondary"></Typography>
			</CardContent>
			<CardContent className={classes.listItem}>
				<ListItemIcon>
					<HomeIcon color="action" />
				</ListItemIcon>
				<ListItemText primary={`${street} ${houseNo} - ${zip}`} />
				<Typography variant="body2" color="textSecondary"></Typography>
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
	listItem: {
		display: 'flex',
	},
}))
