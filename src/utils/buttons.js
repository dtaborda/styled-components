import styled from 'styled-components';

export const Button = styled.button`
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border-radius: 3px;
`;

export const PrimaryButton = Button.extend`
	background: ${props => props.theme.palette.primary1Color};
	color: ${props => props.theme.palette.white};
	border: 2px solid ${props => props.theme.palette.primary1Color};
`;

export const InfoButton = Button.extend`
	background: ${props => props.theme.palette.info};
	color: ${props => props.theme.palette.white};
	border: 2px solid ${props => props.theme.palette.info};
`;

export const ErrorButton = Button.extend`
	background: ${props => props.theme.palette.error};
	color: ${props => props.theme.palette.white};
	border: 2px solid ${props => props.theme.palette.error};
`;
export const WarningButton = Button.extend`
	background: ${props => props.theme.palette.warning};
	color: ${props => props.theme.palette.white};
	border: 2px solid ${props => props.theme.palette.warning};
`;
export const SuccessButton = Button.extend`
	background: ${props => props.theme.palette.success};
	color: ${props => props.theme.palette.white};
	border: 2px solid ${props => props.theme.palette.success};
`;
