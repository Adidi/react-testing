import styled from 'styled-components';

export const TabsWrapper = styled.div`
	background-color: #fff;
	position: relative;
	display: flex;
	border-bottom: 2px solid rgba(182, 182, 182, 0.75);
	padding: 0 20px;
`;

export const Tab = styled.div`
	cursor: pointer;
	padding: 10px 20px;
	color: ${props => props.theme.colors[props.selected ? 'primary' : 'grey2']};
	font-weight: bold;
`;

export const Marker = styled.div`
	position: absolute;
	height: 4px;
	border-radius: 6px;
	bottom: -3px;
	left: 0;
	background-color: ${props => props.theme.colors.primary};
	width: ${props => props.width}px;
	transition: all ${props => (props.animate ? 0.5 : 0)}s cubic-bezier(0.23, 1, 0.32, 1);
	transform: translateX(${props => props.position}px);
`;
