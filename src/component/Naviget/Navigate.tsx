import React, { FC } from "react";
import s from './Naveget.module.css'
import { NavLink } from "react-router-dom";
import { Friends } from "./Friends/Friends";
import { MenuPagesType } from "../../redux/menuReducer";

type NavigatePropsType = {
	menuPages: MenuPagesType
}

export const Navigate: FC<NavigatePropsType> = ( {menuPages} ) => {
	return (
		<nav className={ s.nav }>
			{ menuPages.menu.map( ( el, index ) => {
				return (
					<span key={ index + 1 }
					     className={ s.item }>
						<NavLink to={ `/${ el }` }
						         activeClassName={ s.activeLink }>{ el }</NavLink>
					</span>
				)
				// отрисовываем ссылки
			} ) }
			<div>
				{ <Friends menuPages={ menuPages }/> }
			</div>
			{/*передаем все что в menuPages в компоненту Friends и там уже возьмём друзей*/}
		</nav> )
}



