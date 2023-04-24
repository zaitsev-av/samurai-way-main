import { connect } from "react-redux";
import { AppStateType } from "../../../redux/reduxStore";
import { Dialogs } from "./Dialogs";
import { addNewMessageAC, DialogsType, updateNewMessageAC } from "../../../redux/dialogsReducer";


type MapStateToPropsType = {
	dialog: DialogsType
}

const mapStateToProps = ( state: AppStateType ): MapStateToPropsType => {
	return {
		dialog: state.dialogsReducer
	}
}

export const DialogsContainer = connect( mapStateToProps,
	{
		updateNewMessageAC,
		addNewMessageAC
	} )( Dialogs )
