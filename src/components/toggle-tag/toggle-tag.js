import React from 'react';
import { Wrapper } from './toggle-tag.style';

const ToggleTag = ({ color = 'primary', children, onChange, checked = false }) => {
	return (
		<Wrapper
			checked={checked}
			color={color}
			onClick={() => {
				onChange(!checked);
			}}
		>
			{children}
		</Wrapper>
	);
};

export default ToggleTag;
