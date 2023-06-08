import { authReducer, ResponseAuthDataType, setUserDataAC } from "./auth-reducer";

let initialState: ResponseAuthDataType

beforeEach(()=> {
	initialState = {
		id: null,
		email: null,
		login: null,
		isAuth: false
	}
})

test('should be correctly updating user data', ()=> {
	const data : ResponseAuthDataType = {
		id: 1111,
		email: 'zaitsev@gmail.com',
		login: 'zaitsev_av',
		isAuth: false
	}
	
	const newState = authReducer(initialState, setUserDataAC(data, true))
	
	expect(newState.id).toBe(1111)
	expect(newState.login).toBe('zaitsev_av')
	expect(newState.email).toBe('zaitsev@gmail.com')
	expect(newState.isAuth).toBeTruthy()
	expect(initialState.id).toBe(null)
	expect(initialState.login).toBe(null)
	expect(initialState.email).toBe(null)
	expect(initialState.isAuth).toBeFalsy()
})