import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import LandingPage from '../LandingPage'

it(`buttons 'show list' and 'enter new user' toggles between UsersList and AddressForm pages`, () => {
	render(<LandingPage />)

	const showListBtn = screen.getByText(/show list/i)

	expect(showListBtn).toBeInTheDocument()
	userEvent.click(showListBtn)

	const enterUserBtn = screen.getByText(/enter new user/i)

	expect(enterUserBtn).toBeInTheDocument()

	userEvent.click(enterUserBtn)
	expect(showListBtn).toBeInTheDocument()
})
