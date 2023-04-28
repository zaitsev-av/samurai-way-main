import { connect } from "react-redux";
import { AppStateType } from "../../../redux/reduxStore";
import { Dialogs } from "./Dialogs";
import { addNewMessageAC, DialogsType, updateNewMessageAC } from "../../../redux/dialogsReducer";
import { compose } from "redux";
import { AuthRedirectComponent } from "../../../hoc/AuthRedirect";
import { ComponentType } from "react";


type MapStateToPropsType = {
	dialog: DialogsType
}

const mapStateToProps = ( state: AppStateType ): MapStateToPropsType => {
	return {
		dialog: state.dialogsReducer,
	}
}

export default compose<ComponentType>(
	connect( mapStateToProps,
		{
			updateNewMessageAC,
			addNewMessageAC
		} ),
	AuthRedirectComponent
)(Dialogs)

// export const DialogsContainer = connect( mapStateToProps,
// 	{
// 		updateNewMessageAC,
// 		addNewMessageAC
// 	} )( Dialogs )
// export default AuthRedirectComponent(connect(mapStateToProps,
// // 	{updateNewMessageAC,
// // 	addNewMessageAC}) (DialogsContainer))