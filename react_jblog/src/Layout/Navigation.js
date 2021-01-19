import React, { Component } from 'react';
import styled from 'styled-components';

class Navigation extends Component {
    render() {
      return (
        <Nav>
            <NavList>
                <NavItem>소개</NavItem>
                <NavItem>Study</NavItem>
                <NavItem>정리</NavItem>
                <NavItem>게시판1</NavItem>
                <NavItem>자유게시판</NavItem>
                <NavItem>문의게시판</NavItem>
            </NavList>
        </Nav>
      );
    }
  }
  
export default Navigation;

const Nav = styled.div`
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #d1d8e4;
`

const NavList = styled.ul`
    width: 1080px;
    display: flex;
    margin: 0 auto;
`

const NavItem = styled.li`
    width: 80px;
    margin-left: 18px;
    margin-top: 5px;
    display: flex;
`