import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: ${p => p.theme.space[5]}px;
  text-align: center;
  border-radius: ${p => p.theme.radii.big};
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const Text = styled.p`
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.secondary};
`;
