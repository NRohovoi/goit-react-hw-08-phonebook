import styled from 'styled-components';

import { AiOutlineUserAdd } from 'react-icons/ai';
import { Form, Field } from 'formik';

export const Forms = styled(Form)`
  display: block;
`;

export const Label = styled.label`
  display: block;
`;

export const InputLabel = styled.span`
  display: block;
  font-size: ${p => p.theme.fontSizes.m};
  margin-top: ${p => p.theme.space[4]}px;
  margin-left: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const Input = styled(Field)`
  display: block;
  width: 600px;
  font-weight: bolder;
  font-size: ${p => p.theme.fontSizes.l};
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
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.text};
    color: ${p => p.theme.colors.white};
  }
  ::placeholder {
    color: ${p => p.theme.colors.text};
  }
`;

export const Button = styled.button`
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  font-size: ${p => p.theme.fontSizes.l};
  gap: ${p => p.theme.space[2]}px;
  margin-top: ${p => p.theme.space[6]}px;
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

export const Message = styled.div`
  margin-left: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m};
`;
