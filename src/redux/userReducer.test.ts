import { followUserAC, setUserAC, usersReducer, UserType } from "./usersReducer";
import { v1 } from "uuid";


let initialState: UserType[]

beforeEach( () => {
	initialState =
		[
			{
				name: "andreikastsiukovich",
				id: "28522",
				photos: {
					small: "null",
					large: "null"
				},
				status: "null",
				follow: false
			},
			{
				name: "ostrov2ostrov",
				id: "28521",
				photos: {
					small: "null",
					large: "null"
				},
				status: "null",
				follow: false
			},
			{
				name: "shcherbina",
				id: "28520",
				photos: {
					small: "null",
					large: "null"
				},
				status: "null",
				follow: false
			},
			{
				name: "vita_usmanova",
				id: "28519",
				photos: {
					small: "null",
					large: "null"
				},
				status: "null",
				follow: false
			},
			{
				name: "KateAPI",
				id: "28518",
				photos: {
					small: "null",
					large: "null"
				},
				status: "null",
				follow: false
			},
			{
				name: "Atom0020",
				id: "28517",
				photos: {
					small: "null",
					large: "null"
				},
				status: "null",
				follow: false
			},
			{
				name: "NikSol79",
				id: "28516",
				photos: {
					small: "null",
					large: "null"
				},
				status: "null",
				follow: false
			},
			{
				name: "DAVwsef",
				id: "28515",
				photos: {
					small: "null",
					large: "null"
				},
				status: "null",
				follow: false
			},
			{
				name: "fed",
				id: "28514",
				photos: {
					small: "null",
					large: "null"
				},
				status: "null",
				follow: false
			},
			{
				name: "AlekseyIa",
				id: "28513",
				photos: {
					small: "null",
					large: "null"
				},
				status: "null",
				follow: false
			}
		]
	
} )

test( 'change subscription status', () => {
	const newState = usersReducer( initialState, followUserAC(  "28522" ) )
	
	expect( newState[ 0 ].follow ).toBe( true )
	expect( initialState[ 0 ].follow ).toBe( false )
	
} )

const newUser = [
	{
	name: "ostrov2ostrov",
	id: "28521",
	photos: {
		small: "null",
		large: "null"
	},
	status: "null",
	follow: false
}]


test( 'adding a new user', () => {
	const newState = usersReducer( initialState, setUserAC( newUser ) )
	
	expect( newState.length ).toBe( 11 )
	expect( initialState.length ).toBe( 10 )
	
} )
















