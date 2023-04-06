import React from 'react';
import s from './Preloader.module.css'
export const Preloader= (  ) => {
	
	return (
		<div className={ s.loader }>
			<div className={s.loader__globe}>
				<div className={s.loader__globe__half}></div>
				<div className={ s.loader__globe__half }></div>
			</div>
			<div className={ s.loader__text }>loading...</div>
		</div>
		
	);
};