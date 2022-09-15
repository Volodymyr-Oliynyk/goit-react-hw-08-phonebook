import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 20px 50px;
  text-align: center;
`;

export const HomeTitle = styled.h3`
font-size: ${({ theme }) => theme.fontSizes.md};
`;


export const HomeText = styled.p`
font-size: ${({ theme }) => theme.fontSizes.sm};
color: ${({ theme }) => theme.colors.secondary};
`;

export const HomeLink = styled(Link)`
color: aliceblue
  color: ${({ theme }) => theme.colors.secondary};
//   font-weight: ${({ theme }) => theme.fontWeights.bold};
 `;