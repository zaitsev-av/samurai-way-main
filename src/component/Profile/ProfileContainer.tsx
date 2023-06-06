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
		this.props.getProfile( this.props.profileInfo.profile.userId )
		this.props.getStatus( this.props.profileInfo.profile.userId )
	}
	
	render() {
		return (
			<Profile profileInfo={ this.props.profileInfo }
			         addPost={ this.props.addPost }
			         status={ this.props.status }
			         updateStatus={this.props.updateStatus}
			         userID={this.props.profileInfo.profile.userId }
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