import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
      return (
        <Nav>
            <NavList>
                <NavItem><Link to='/about'>소개</Link></NavItem>
                <NavItem>Study</NavItem>
                <NavItem><Link to='/board'>게시판</Link></NavItem>
                <NavItem><Link to='/myboard'>내 글 보기</Link></NavItem>
                <NavItem><Link to='/mypage'>마이페이지</Link></NavItem>
            </NavList>
        </Nav>
      );
    }
  }
  
export default Navigation;

const Nav = styled.div`
    width: 100%;
    height: 30px;
    text-align: center;
    border-bottom: 1px solid #d1d8e4;
`

const NavList = styled.ul`
    width: 1080px;
    display: flex;
    margin: 0 auto;
    text-align: center;
`

const NavItem = styled.li`
    width: 80px;
    margin: 5px 15px;
    text-align: center;
    display: flex;
`