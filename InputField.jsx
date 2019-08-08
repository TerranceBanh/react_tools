//Make into a search and input field
import React from 'react'

const InputField = ({
//Parameters
	accept = '',
	autocomplete = 'on',
	autofocus = false,
	maxlength = '',
	min = '',
	onKeyDown = () => {},
}) => (
	<input
//Attributes
		type="text"
		accept={accept}
		autocomplete={autocomplete}
		autofocus={autofocus}
		maxlength={maxlength}
		min={min}
		onKeyDown={onChange}
	>
	</input>
)

export default InputField
