import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`;

export const NavList = styled.ul`
  display: flex;
  gap: ${p => p.theme.space[5]}px;
`;

export const NavItem = styled.li``;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: bolder;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.big};
  color: ${p => p.theme.colors.black};
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3),
    -23px 0 20px -23px rgba(0, 0, 0, 0.6), 23px 0 20px -23px rgba(0, 0, 0, 0.6),
    inset 0 0 40px rgba(0, 0, 0, 0.1);
  transition-property: background-color, color;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    background-color: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.black};
  }
  &:hover:not(.active),
  &:focus:not(.active) {
    background-color: ${p => p.theme.colors.text};
    color: ${p => p.theme.colors.white};
  }
`;
