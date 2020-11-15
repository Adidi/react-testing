import styled from 'styled-components';
import { lighten } from '../../utils/color';

export const Wrapper = styled.span`
	display: inline-block;
	padding: 3px 10px;
	font-weight: bold;
	text-transform: uppercase;
	color: ${props => props.theme.colors[props.color]};
	background-color: ${props => lighten(props.theme.colors[props.color], 0.8)};
	border-radius: 3px;
	font-size: 12px;
`;
