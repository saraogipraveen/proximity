import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const NavBar = (props) => {

    const Nav = styled.nav`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 30px 25px;
    `;

    const StyledLink = styled(Link)`
        text-decoration: none;
        color: #000;
        font-weight: bold;
        padding: 0 25px;
        &:first-child{
            margin-right: auto;
            font-size: 20px;
        }
    `


    return (
        <Nav>
            <StyledLink to="/">&lt; S O C K E T /&gt;</StyledLink>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/users">Users</StyledLink>
            <StyledLink to="/go/to/no/match">No Match</StyledLink>
        </Nav>
    )
}

export default NavBar;