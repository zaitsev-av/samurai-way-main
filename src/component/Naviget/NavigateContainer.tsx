import { connect } from "react-redux";
import { AppStateType } from "../../redux/reduxStore";
import { Navigate } from "./Navigate";
import { MenuPagesType } from "../../redux/menuReducer";


type MapStateToPropsType = {
	menuPages: MenuPagesType
}

const mapStateToProps = ( state: AppStateType ): MapStateToPropsType => {
	return {
		menuPages: state.menuReducer
	}
} // action in menuReducer any
//диспатчить пока ничего не надо

export const NavigateContainer = connect( mapStateToProps )( Navigate )
