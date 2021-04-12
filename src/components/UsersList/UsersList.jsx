import React, { useEffect } from 'react'

import useForm from '../../hooks/useFrom'

const UsersList = ({ users }) => {
	return (
		<ul>
			{users
				? users.map((user) => <li key={user.id}>{user.fullName}</li>)
				: null}
		</ul>
	)
}

export default UsersList
