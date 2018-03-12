import { checkProtoChain, checkProperties } from './spec.utils'
import { CustomError } from './custom-error'

test('Instance', () => checkProtoChain(CustomError, Error))

test('Instance pre ES6 environment', () => {
	const O = <any>Object
	const E = <any>Error
	const setPrototypeOf = O.setPrototypeOf
	const captureStackTrace = E.captureStackTrace
	delete O.setPrototypeOf
	delete E.captureStackTrace

	checkProtoChain(CustomError, Error)

	O.setPrototypeOf = setPrototypeOf
	E.captureStackTrace = captureStackTrace
})

test('Extended', () => {
	class SubError extends CustomError {}
	checkProtoChain(SubError, CustomError, Error)
})

test('Basic properties', () => checkProperties(CustomError))
