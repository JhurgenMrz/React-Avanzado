import styled from 'styled-components'
import {Link as LinkRouter} from '@reach/router'

export const Link = styled(LinkRouter)`
    align-items: center;
    color: #888;
    display: inline-flex;
    height: 100%;
    justify-content: center;
    text-decoration: none;
    width:100%;
`

export const Nav = styled.nav`
    align-items: center;
    background: #fcfcfc;
    border-top: 1px solid #e0e0e0;
    bottom: 0;
    display:flex;
    height: 50px;
    justify-content: space-around;
    left:0;
    right:0;
    margin:0 auto;
    max-width: 500px;
    position: fixed;
    width:100%;
    z-index: 1000;
`