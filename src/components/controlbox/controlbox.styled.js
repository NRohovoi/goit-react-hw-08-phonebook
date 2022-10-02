import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[4]}px;
  margin: ${p => p.theme.space[5]}px;
`;

export const Button = styled.button`
  text-align: center;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.text};
  border-radius: ${p => p.theme.radii.big};
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.text};
    color: ${p => p.theme.colors.white};
    scale: 1.3;
    font-weight: bolder;
  }
`;
