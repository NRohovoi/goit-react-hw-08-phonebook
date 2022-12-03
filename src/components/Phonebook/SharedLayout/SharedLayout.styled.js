import styled from 'styled-components';

import { AiFillContacts } from 'react-icons/ai';

export const PhonebookIcon = styled(AiFillContacts)`
  display: block;
  height: 140px;
  width: 140px;
  margin-right: auto;
  margin-left: auto;
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.round};
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3),
    -23px 0 20px -23px rgba(0, 0, 0, 0.6), 23px 0 20px -23px rgba(0, 0, 0, 0.6),
    inset 0 0 40px rgba(0, 0, 0, 0.1);
`;
