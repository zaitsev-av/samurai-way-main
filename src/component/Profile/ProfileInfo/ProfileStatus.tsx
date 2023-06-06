import React, { ChangeEvent, memo, useCallback, useEffect, useState } from 'react';


type ProfileStatusPropsType = {
	upDateStatus: ( status: string ) => void;
	status: string;
};

export const ProfileStatus: React.FC<ProfileStatusPropsType> = memo( ( { status, upDateStatus } ) => {
	const [ editMode, setEditMode ] = useState<boolean>( false );
	const [ value, setValue ] = useState<string>( status );
	
	useEffect( () => {
		setValue( status )
	}, [ status ] )
	
	const activateEditMode = useCallback(() => {
		setEditMode( true );
		setValue( status );
	}, [status]);
	
	const deactivateEditMode = useCallback (() => {
		setEditMode( false );
		upDateStatus( value )
		// updateStatus(value);
	}, [upDateStatus, value]);
	
	const onStatusChange = ( e: ChangeEvent<HTMLInputElement> ) => {
		setValue( e.currentTarget.value );
	};
	
	return (
		<div>
			{ editMode ? (
				<div>
					<input onChange={ onStatusChange }
					       autoFocus
					       onBlur={ deactivateEditMode }
					       value={ value }/>
				</div> ) :
				(<div>
					<span onDoubleClick={ activateEditMode }>{ status || 'Нет статуса' }</span>
				</div>
			) }
		</div>
	);
});
//-------------class component ----------------------
// import React, { ChangeEvent, Component } from 'react';
//
// type ProfileStatusPropsType = {
// 	updateStatus: (status: string) => void;
// 	status: string;
// };
//
// type ProfileStatusStateType = {
// 	editMode: boolean;
// 	value: string;
// };
//
// export class ProfileStatus extends Component<ProfileStatusPropsType, ProfileStatusStateType> {
// 	state = {
// 		editMode: false,
// 		value: this.props.status,
// 	};
//
// 	componentDidUpdate(prevProps: ProfileStatusPropsType) {
// 		if (prevProps.status !== this.props.status) {
// 			this.setState({
// 				value: this.props.status,
// 			});
// 		}
// 	}
//
// 	activateEditMode = () => {
// 		this.setState({
// 			editMode: true,
// 			value: this.props.status,
// 		});
// 	};
//
// 	deactivateEditMode = () => {
// 		this.setState({
// 			editMode: false,
// 		});
// 		this.props.updateStatus(this.state.value);
// 	};
//
// 	onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
// 		this.setState({
// 			value: e.currentTarget.value,
// 		});
// 	};
//
// 	render() {
// 		const { status } = this.props;
// 		const { editMode, value } = this.state;
//
// 		return (
// 			<div>
// 				{editMode ? (
// 					<div>
// 						<input onChange={this.onStatusChange} autoFocus onBlur={this.deactivateEditMode} value={value} />
// 					</div>
// 				) : (
// 					<div>
// 						<span onDoubleClick={this.activateEditMode}>{status || 'Нет статуса'}</span>
// 					</div>
// 				)}
// 			</div>
// 		);
// 	}
// }
