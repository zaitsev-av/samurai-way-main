import { connect } from "react-redux";
import {
	addPostAC,
	getProfileInfo,
	getStatus,
	PostType,
	ProfilePageType,
	setUserProfileAC,
	updateStatus
} from "../../redux/profileReducer";
import { AppStateType } from "../../redux/reduxStore";
import { Profile } from "./Profile";
import React, { ComponentType } from "react";
import { AuthRedirectComponent } from "../../hoc/AuthRedirect";
import { compose } from "redux";


export type ProfileContainerPropsType = {
	profileInfo: ProfilePageType
	addPost: (text: string) => void
	setUserProfile: ( profile: ProfilePageType ) => void
	getProfile: ( userID: number ) => void
	getStatus: ( userID: number ) => void
	updateStatus: (status: string) => void
	status: string
	userID: number
}

class ProfileContainerClass extends React.Component<ProfileContainerPropsType> {
	componentDidMount() {
		const { getProfile, getStatus, profileInfo } = this.props
		getProfile( profileInfo.profile.userId )
		getStatus( profileInfo.profile.userId )
	}
	
	render() {
		const { profileInfo, updateStatus, status, addPost } = this.props
		return (
			<Profile profileInfo={ profileInfo }
			         addPost={ addPost }
			         status={ status }
			         updateStatus={ updateStatus }
			         userID={ profileInfo.profile.userId }
			/>
		)
	}
}

type MapStateToPropsType = {
	profileInfo: ProfilePageType
	status: string | null
	posts: PostType[]
}
const mapStateToProps = ( state: AppStateType ): MapStateToPropsType => {
	return {
		profileInfo: { ...state.profileReducer },
		status: state.profileReducer.status,
		posts: state.profileReducer.posts
	}
}
export default compose<ComponentType>(
	connect( mapStateToProps, {
		addPost: addPostAC,
		setUserProfile: setUserProfileAC,
		getProfile: getProfileInfo,
		getStatus,
		updateStatus
	} ),
	AuthRedirectComponent
)( ProfileContainerClass )