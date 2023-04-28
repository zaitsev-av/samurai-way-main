import { connect } from "react-redux";
import { AppStateType } from "../../../redux/reduxStore";
import { Dialogs } from "./Dialogs";
import { addNewMessageAC, DialogsType, updateNewMessageAC } from "../../../redux/dialogsReducer";


type MapStateToPropsType = {
	dialog: DialogsType
	isAuth: boolean
}

const mapStateToProps = ( state: AppStateType ): MapStateToPropsType => {
	return {
		dialog: state.dialogsReducer,
		isAuth: state.authReducer.isAuth
	}
}

export const DialogsContainer = connect( mapStateToProps,
	{
		updateNewMessageAC,
		addNewMessageAC
	} )( Dialogs )
// export default AuthRedirectComponent(connect(mapStateToProps,
// // 	{updateNewMessageAC,
// // 	addNewMessageAC}) (DialogsContainer))