// Backslashes requires testing
// Optional Filter

const KeyFilter = ({
	key = '',
	returnValType = ''
	keytype = ['letter', 'number', 'other character', 'arrow', 'other keys'],
	customFilter = ''
}) => {

	const keySets = {
		letter: [
			'a', 'b', 'c', 'd', 'e',
			'f', 'g', 'h', 'i', 'j',
			'k', 'l', 'm', 'n', 'o',
			'p', 'q', 'r', 's', 't',
			'u', 'v', 'w', 'x', 'y', 'z'
		],
		numberArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
		otherCharactersArr = [
			'~', '!', '@', '#', '$',
			'%', '^', '&', '*', '(',
			')', '_', '+', '_', '{',
			'}', '|', ':', '"', '<',
			'>', '?', '`', '-', '=',
			'[', ']', ';', "'", ',',
			'.', '/', ' ',
		],
		arrow: ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'],
		modifer: ['Shift', 'Control', 'Alt']
		otherKeys: [
			'Insert', 'Delete', 'Home',
			'end', 'PageUp', 'PageDown',
			'ScrollLock', 'Pause', 'Enter'
		]
	}

	const equal = ({el,arr}) => {
		val = ''
		arr.map((x) => el === x ? val = x : continue)
		return {
			arr,
			val,
			boolean: el === val
		}
	}

	const valTypes = ['array', 'value', 'boolean']

	const matc = equal({
		el: key
		arr: keytype
	})

	return
}

export default KeyFilter
