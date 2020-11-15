import styled, { css } from 'styled-components';

export const RawButton = styled.button`
	border: none;
	margin: 0;
	padding: 0;
	width: auto;
	overflow: visible;
	text-align: inherit;
	background: transparent;
	outline: none;
	color: inherit;
	font: inherit;
	line-height: normal;
	-webkit-font-smoothing: inherit;
	-moz-osx-font-smoothing: inherit;
	-webkit-appearance: none;
	&::-moz-focus-inner {
		border: 0;
		padding: 0;
	}
`;


const checked = ({ checked, theme, color }) => {
	if (checked) {
		return css`
			color: #fff;
			background-color: ${theme.colors[color]};
		`;
	} else {
		return css`
			color: ${theme.colors[color]};
			background-color: #fff;
		`;
	}
};

export const Wrapper = styled(RawButton)`
	display: inline-block;
	text-align: center;
	padding: 1px 8px;
	min-width: 60px;
	font-weight: bold;
	text-transform: uppercase;
	font-size: 12px;
	cursor: pointer;
	border: 1px solid ${props => props.theme.colors[props.color]};
	${checked};
`;
