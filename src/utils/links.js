import React from 'react';
import styled from 'styled-components';

// This could be react-router's Link for example
export const Link = ({ className, children }) => (
	<a className={className}>
		{children}
	</a>
)

export const StyledLink = styled(Link)`
	color: palevioletred;
	font-weight: bold;
`;
