import { followUserAC, setUserAC, UsersPageType, usersReducer } from "./usersReducer";
import { v1 } from "uuid";


let initialState: UsersPageType
let user1 = v1();
let user2 = v1();
let user3 = v1();
let user4 = v1();

beforeEach( () => {
	initialState = {
		users: [
			{
				id: user1, fullName: 'Alexander', status: 'Good job',
				followed: true,
				avatar: '',
				location: {
					city: 'Mozyr',
					country: 'Belarus'
				}
			},
			{
				id: user2, fullName: 'Viktoria', status: 'Great wife',
				followed: true,
				avatar: '',
				location: {
					city: 'Mozyr',
					country: 'Belarus'
				}
			},
			{
				id: user3, fullName: 'Ksenia', status: 'Daughter Alexander',
				followed: true,
				avatar: '',
				location: {
					city: 'Mozyr',
					country: 'Belarus'
				}
			},
			{
				id: user4, fullName: 'Viktor', status: 'Web developer',
				followed: false,
				avatar: '',
				location: {
					city: 'Moscow',
					country: 'Russia'
				}
			}
		]
	}
} )

test( 'change subscription status', () => {
	const newState = usersReducer( initialState, followUserAC(  user1 ) )
	
	expect( newState.users[ 0 ].followed ).toBe( false )
	expect( initialState.users[ 0 ].followed ).toBe( true )
	
} )

const newUser = {
	users: [
		{
			id: v1(), fullName: 'Bob', status: 'Great worker',
			followed: false,
			avatar: '',
			location: {
				city: 'New-York',
				country: 'USA'
			}
		}
	]
}

test( 'adding a new user', () => {
	const newState = usersReducer( initialState, setUserAC( newUser.users ) )
	
	expect( newState.users[ 4 ].followed ).toBe( false )
	expect( newState.users[ 4 ].fullName ).toBe( 'Bob' )
	expect( newState.users[ 4 ].location.city ).toBe( 'New-York' )
	expect( initialState.users[ 4 ] ).not.toBe( false )
	
} )
















