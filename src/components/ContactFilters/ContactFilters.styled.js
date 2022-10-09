import styled from 'styled-components';

import { RiUserSearchFill } from 'react-icons/ri';

export const Label = styled.label`
  display: flex;
  align-items: center;
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  transition-property: color;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  font-size: ${p => p.theme.fontSizes.m};
  border: 1px solid;
  border-radius: ${p => p.theme.radii.big};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3),
    -23px 0 20px -23px rgba(0, 0, 0, 0.6), 23px 0 20px -23px rgba(0, 0, 0, 0.6),
    inset 0 0 40px rgba(0, 0, 0, 0.1);
  transition-property: background-color, scale;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.text};
    color: ${p => p.theme.colors.white};
    scale: 1.02;
    font-weight: bolder;
  }
  ::placeholder {
    color: ${p => p.theme.colors.text};
  }
`;

export const SearchIcon = styled(RiUserSearchFill)`
  margin-right: ${p => p.theme.space[3]}px;
`;
