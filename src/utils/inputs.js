import styled from 'styled-components';

export const Input = styled.input.attrs({
	// or we can define dynamic ones
	margin: props => props.size || '1em',
	padding: props => props.size || '0.5em'
})`
	color: ${props => props.theme.palette.primary1Color};
	font-size: 1em;
	border: 2px solid ${props => props.theme.palette.borderColor};
	border-radius: ${props => props.theme.borderRadius}px;

	/* here we use the dynamically computed props */
	margin: ${props => props.margin};
	padding: ${props => props.padding};
`;
