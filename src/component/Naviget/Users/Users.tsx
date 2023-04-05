import React from 'react';
import { UserType } from "../../../redux/usersReducer";
import abcd from '../../../image/avatar/abcd.png'
import s from './Users.module.css'
import axios from "axios";

export type UsersPropsType = {
	users: UserType[]
	pages: number[]
	currentPage: number
	totalUsersCount: number
	pageSize: number
	followUser: ( userID: string ) => void
	setUser: ( users: UserType[] ) => void
	setCurrentPage: (currentPage: number) => void
};

// создание классовой компоненты, слово extends обязательно!
export class Users extends React.Component<UsersPropsType, UserType[]> { //наследование классовой компоненты у реакта
	componentDidMount() {
		axios.get( `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}` )
			.then( response => this.props.setUser( response.data.items ) )
	}// запрос на сервер за юзерами
	
	render() {
		let pageCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize )
		let pages = []
		for ( let i = 1; i <= pageCount; i++ ) {
			pages.push( i )
		}
		return (
			<div className={ s.usersLists }>
				<div>
					{pages.map(el => <span onClick={()=> {
					this.props.setCurrentPage(el)
					}
					} className={this.props.currentPage === el ? s.pages : ''}>{ el }</span>)}
				</div>
				{ this.props.users.map( u => {
					const onFollowUser = () => {
						this.props.followUser( u.id )
					}
					return (
						<>
							<div key={ u.id }>
								<div className={ s.card }>
									<div className={ s.img }>
										<img src={ u.photos.small !== null ? u.photos.small : abcd }
										     alt={ 'avatar' }/></div>
									<div className={ s.info }>
										<span>{ u.name }</span>
										<p className={ s.text }>{ u.status }</p>
									</div>
									<button onClick={ onFollowUser }>{ u.follow ? 'Follow' : 'Unfollow' }</button>
								</div>
							</div>
						
						</>
					
					
					)
				} ) }
			
			
			</div>
		);
	}
}

// export const Users: React.FC<UsersPropsType> = ( props ) => {
// 	const { users, followUser, setUser } = props
// 	useEffect( () => {
// 		axios.get( 'https://social-network.samuraijs.com/api/1.0/users' ).then(
// 			response => setUser( response.data.items ) )
// 	}, [ setUser ] )
//
//
//
// };