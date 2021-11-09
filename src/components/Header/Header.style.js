import styled from 'styled-components'
import {StyledHeader} from './StyledHeader'

export const Header = styled(StyledHeader) `
background-color: ${({theme}) => theme.lightMode.header};
padding:40px 0;

 h1 {
     color:red;
 }
`

export const Nav = styled.nav`
display:flex;
align-items:center;
justify-content:space-between;
margin-bottom:40px;
`

export const Logo = styled.img``



