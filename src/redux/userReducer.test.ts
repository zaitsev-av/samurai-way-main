import { followingUserSuccessAC, UsersPageType, usersReducer } from "./usersReducer";

let initialState: UsersPageType

beforeEach( () => {
	initialState = {
		users: [
			{
				name: "andreikastsiukovich",
				id: 28522,
				photos: {
					small: "null",
					large: "null"
				},
				status: "null",
				followed: false
			},
			{
				name: "ostrov2ostrov",
				id: 28521,
				photos: {
					small: "null",
					large: "null"
				},
				status: "null",
				followed: false
			},
			{
				name: "shcherbina",
				id: 28520,
				photos: {
					small: "null",
					large: "null"
				},
				status: "null",
				followed: false
			},
			{
				name: "vita_usmanova",
				id: 28519,
				photos: {
					small: "null",
					large: "null"
				},
				status: "null",
				followed: false
			},
			{
				name: "KateAPI",
				id: 28518,
				photos: {
					small: "null",
					large: "null"
				},
				status: "null",
				followed: false
			},
			{
				name: "Atom0020",
				id: 28517,
				photos: {
					small: "null",
					large: "null"
				},
				status: "null",
				followed: false
			},
			{
				name: "NikSol79",
				id: 28516,
				photos: {
					small: "null",
					large: "null"
				},
				status: "null",
				followed: false
			},
			{
				name: "DAVwsef",
				id: 28515,
				photos: {
					small: "null",
					large: "null"
				},
				status: "null",
				followed: false
			},
			{
				name: "fed",
				id: 28514,
				photos: {
					small: "null",
					large: "null"
				},
				status: "null",
				followed: false
			},
			{
				name: "AlekseyIa",
				id: 28513,
				photos: {
					small: "null",
					large: "null"
				},
				status: "null",
				followed: false
			}
		],
		pageSize: 20,
		totalUsersCount: 0,
		currentPage: 1,
		isFetching: false,
		followingInProgress: []}
} )

test( 'change subscription status', () => {
	const newState = usersReducer( initialState, followingUserSuccessAC(  28522 ) )
	
	expect( newState.users[ 0 ].followed ).toBe( true )
	expect( initialState.users[ 0 ].followed ).toBe( false )
	
} )

const newUser = [
	{
	name: "ostrov2ostrov",
	id: 28521,
	photos: {
		small: "null",
		large: "null"
	},
	status: "null",
	follow: false
}]


// test( 'adding a new user', () => {
// 	const newState = usersReducer( initialState, setUserAC( newUser ) )
//
// 	expect( newState.users.length ).toBe( 11 )
// 	expect( initialState.users.length ).toBe( 10 )
//
// } )
















