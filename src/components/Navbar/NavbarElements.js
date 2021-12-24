import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Nav = styled.nav`
 background: #fff;
 height: 60px;
 display: flex;
 justify-content: flex-start;
 padding : 0.5rem calc((100vw - 1000px) / 2);
 z-index: 10;
`

export const NavLink = styled(Link)`
 color: #020202;
 display: flex;
 align-items: center;
 text-decoration: none;
 padding: 0 1rem;
 height: 100%;
 cursor: pointer;

 &.active {
     color: #208000;
 }
`

export const NavMenu = styled.div`
 display: flex;
 align-items: center;
 width: 100vw;
 white-space: nowrap:

 @media screen and (max-width: 768px) {
     display: none;
 }
`

export const NavBtn = styled.nav`
 display: flex;
 align-items: center;
 margin-right: 24px;
 justify-content: flex-end;
 width: 1000vw;
 @media screen and (max-width: 768px) {
     display: none;
 }
`

export const NavBtnLink = styled(Link)`
 border-radius: 4px;
 background: #fff;
 padding: 10px 22px;
 color: #020202;
 border: none;
 outline: none;
 cursor: pointer;
 transition: all 0.2s ease-in-out;
 text-decoration: none;

 &:hover {
    transition: all 0.2s ease-in-out;
    background: #208000;
    color: #fff;
 }
`

export const Btn = styled.button`
color: #020202;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
border: none;
height: 100%;
cursor: pointer;

&.active {
    color: #208000;
}
`