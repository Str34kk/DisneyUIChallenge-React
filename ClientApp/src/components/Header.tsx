import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo />
            <NavMenu>
                

            </NavMenu>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 80px;
    background: #090b13;
`
const Logo = styled.image`
    width: 80px;
`
const NavMenu = styled.div`

`