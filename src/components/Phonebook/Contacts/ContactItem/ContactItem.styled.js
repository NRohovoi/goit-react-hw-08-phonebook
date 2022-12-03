import styled from 'styled-components';

import { RiContactsFill } from 'react-icons/ri';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import { TbPhoneCall } from 'react-icons/tb';

export const ContactsItem = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[3]}px;

  border-radius: ${p => p.theme.radii.big};
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const ContactIcon = styled(RiContactsFill)`
  width: 24px;
  height: 24px;
  color: ${p => p.theme.colors.white};
  margin-right: ${p => p.theme.space[2]}px;
`;

export const ContactData = styled.span`
  text-align: center;
  width: 310px;
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.l};
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
  width: 34px;
  height: 34px;
`;

export const ToCall = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    scale: 1.02;
    font-weight: bolder;
  }
`;

export const CallIcon = styled(TbPhoneCall)`
  width: 34px;
  height: 34px;
`;
