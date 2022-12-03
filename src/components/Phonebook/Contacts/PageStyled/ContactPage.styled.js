import styled from 'styled-components';
import { AiOutlineUserAdd } from 'react-icons/ai';

export const Main = styled.main``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[6]}px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  font-size: ${p => p.theme.fontSizes.l};
  gap: ${p => p.theme.space[2]}px;
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.background};
  color: ${p => p.theme.colors.white};
  border: 1px solid;
  border-radius: ${p => p.theme.radii.big};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3),
    -23px 0 20px -23px rgba(0, 0, 0, 0.6), 23px 0 20px -23px rgba(0, 0, 0, 0.6),
    inset 0 0 40px rgba(0, 0, 0, 0.1);
  transition-property: background-color;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.text};
  }
`;

export const ButtonIcon = styled(AiOutlineUserAdd)`
  height: 24px;
  width: 24px;
`;
