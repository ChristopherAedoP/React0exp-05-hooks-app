import React, { memo } from 'react'

export const Small = memo(({ value }) => {

	console.log('me llamaron ! ;D')
	return (
		<small>
			{value}
		</small>
	)
})
