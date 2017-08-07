import styled from 'styled-components';
import { media } from '../theme/style_utils';

export const Panel = styled.div`
  text-align: center;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
  ${media.phone`
    flex-direction: column;
  `}
`;

export const Column = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: inherit;
  width: ${props => props.width ? props.width : 'initial'};
  ${media.phone`
    width: 100%;
  `}
`;

export const Header = styled.header`
  background-color: ${props => props.theme.palette.primary3Color};
  padding: 20px;
  color: ${props => props.theme.palette.primary1Color};
  min-height: 50px;
  margin-bottom: 20px;
`;
