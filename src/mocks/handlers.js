import { rest } from 'msw'

export const handlers = [
	// rest or graphQl based on api
	rest.get(
		'https://maps.googleapis.com/maps/api/geocode/json?address',
		(req, res, ctx) => {
			return res(
				ctx.json({
					results: [
						{
							formated_address:
								'Kauno g. 12, Vilnius 03214, Lithuania',
						},
					],
					status: 'OK',
				})
			)
		}
	),
]
