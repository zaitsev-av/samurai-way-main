import { connect } from "react-redux";
import { AppStateType } from "../../../redux/reduxStore";
import { Dialogs } from "./Dialogs";
import { addNewMessageAC } from "../../../redux/dialogsReducer";
import { compose } from "redux";
import { AuthRedirectComponent } from "../../../hoc/AuthRedirect";
import { ComponentType } from "react";

const mapStateToProps = ( state: AppStateType ) => {
	return {
		dialog: state.dialogsReducer
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		addNewMessage: (message: string) => {
			dispatch(addNewMessageAC(message))
		},
	}
}

export default compose<ComponentType>(
	connect( mapStateToProps, mapDispatchToProps),
	AuthRedirectComponent
)(Dialogs)