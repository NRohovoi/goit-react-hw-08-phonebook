import styled from 'styled-components';

import { AiFillContacts } from 'react-icons/ai';

export const Box = styled.div`
  width: 1240px;
  min-height: 640px;
  margin-right: auto;
  margin-left: auto;
  margin-top: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.background};
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  padding-left: ${p => p.theme.space[6]}px;
  padding-right: ${p => p.theme.space[6]}px;
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.heading};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3),
    -23px 0 20px -23px rgba(0, 0, 0, 0.6), 23px 0 20px -23px rgba(0, 0, 0, 0.6),
    inset 0 0 40px rgba(0, 0, 0, 0.1);
`;

export const PhonebookIcon = styled(AiFillContacts)`
  display: block;
  height: 48px;
  width: 48px;
  margin-right: auto;
  margin-left: auto;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.round};
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3),
    -23px 0 20px -23px rgba(0, 0, 0, 0.6), 23px 0 20px -23px rgba(0, 0, 0, 0.6),
    inset 0 0 40px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
`;

export const LoaderBox = styled.div`
  height: 18px;
  width: 18px;
  margin-right: auto;
  margin-left: auto;
`;
export const ErrorMessage = styled.p`
  font-size: 16px;
`;
