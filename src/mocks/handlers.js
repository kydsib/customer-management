import { rest } from 'msw'

export const handlers = [
	rest.get(
		'https://maps.googleapis.com/maps/api/geocode/json',
		async (req, res, ctx) => {
			return res(
				ctx.json({
					results: [
						{
							formatted_address: 'Kauno g. 12, Vilnius 03214',
						},
					],
					status: 'OK',
				})
			)
		}
	),
]
