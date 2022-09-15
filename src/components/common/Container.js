import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  height: auto;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${p => p.theme.colors.background};
  background-position: center;
  background-size: cover;
`;
