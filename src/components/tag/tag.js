import React from 'react';
import { Wrapper } from './tag.style';

const Tag = ({ color, children }) => {
	return <Wrapper color={color}>{children}</Wrapper>;
};

export default Tag;
