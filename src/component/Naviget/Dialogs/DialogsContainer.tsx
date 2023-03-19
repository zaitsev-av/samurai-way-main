import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateType } from "../../../redux/reduxStore";
import { Dialogs } from "./Dialogs";
import { addNewMessageAC, DialogsType, updateNewMessageAC } from "../../../redux/dialogsReducer";


type MapStateToPropsType = {
	dialog: DialogsType
}

type MapDispatchToProps = {
	updateNewMessageAC: ( newMessageText: string ) => void
	addNewMessageAC: () => void
}

const mapStateToProps = ( state: AppStateType ): MapStateToPropsType => {
	return {
		dialog: state.dialogsReducer
	}
}

const mapDispatchToProps = ( dispatch: Dispatch ): MapDispatchToProps => {
	return {
		updateNewMessageAC: ( newMessageText: string ) => dispatch( updateNewMessageAC( newMessageText ) ),
		addNewMessageAC: () => dispatch( addNewMessageAC() ),
	}
}

export const DialogsContainer = connect( mapStateToProps, mapDispatchToProps )( Dialogs )
