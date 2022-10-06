import styled from 'styled-components';
import { RiContactsFill } from 'react-icons/ri';
import { RiDeleteBack2Fill } from 'react-icons/ri';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.big};
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const ContactIcon = styled(RiContactsFill)`
  width: 24px;
  height: 24px;
  color: ${p => p.theme.colors.white};
`;

export const ContactData = styled.span`
  color: ${p => p.theme.colors.white};
`;

export const Buttom = styled.button`
  display: block;
  padding: ${p => p.theme.space[0]}px;
  border: none;
  background-color: inherit;
  cursor: pointer;
  transition-property: color, scale;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    scale: 1.02;
    font-weight: bolder;
  }
`;

export const ButtonIcon = styled(RiDeleteBack2Fill)`
  width: 24px;
  height: 24px;
`;
