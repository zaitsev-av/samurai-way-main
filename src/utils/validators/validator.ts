export const requiredField = (value: string) => {
	if ( value.trim().length === 0 ) {
		return 'Required field'
	}
	return undefined
}