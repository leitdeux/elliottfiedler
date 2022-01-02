/** @jsxImportSource theme-ui */
import React from 'react';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes({
	from: { opacity: 0 },
	to: { opacity: 1 }
});

const fadeOut = keyframes({
	from: { opacity: 1 },
	to: { opacity: 0 }
});


export default function Overlay(props) {
	const {
		isOpen,
		onClick,
		style
	} = props;

	return (
		<div
			onClick={() => onClick(false)}
			role="button"
			sx={{
				zIndex: 1,
				top: 'var(--navbar-height)',
				left: 0,
				right: 0,
				bottom: 0,
				height: '100vh',
				position: 'absolute',
				pointerEvents: isOpen ? 'auto' : 'none',
				cursor: isOpen ? 'pointer' : 'inherit',
				background: 'rgba(0,0,0,0.15)',
				opacity: isOpen ? 1 : 0,
				animation: `${isOpen ? fadeIn : fadeOut} 0.25s linear`,
				...style
			}}
		/>
	);
}

