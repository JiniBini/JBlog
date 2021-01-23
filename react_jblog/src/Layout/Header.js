import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './img/simple_logo.png';

class Header extends Component {
    render() {
        return (
            <Container>
                <Element>
                    <ShortCut><Link to='/login'>로그인</Link>/회원가입</ShortCut>
                    <Logo>
                        <img
                            width="100%"
                            height="100%"
                            src={logo}
                            alt="logo" />
                    </Logo>
                    <Search><h1>JBlog</h1></Search>
                </Element>
            </Container>
        );
    }
}

export default Header;

const Container = styled.div`
    background-color: #808080;
    width: 100%;
    height: 12%;
    border-bottom: 1px solid #d1d8e4;
    margin : 0px 3px;
`

const Element = styled.div`
    margin: 0 auto;
    width: 1080px;
    height: 100px;
    display: flex;
    flex-flow: row wrap;
`

const ShortCut = styled.div`
    order: 1;
    width: 100%;
    height: 15%;
    text-align: right;
    background-color: #ffffff;
    margin-bottom: 2px;

`

const Logo = styled.div`
    order: 2;
    width: 200px;
    height: 60%;
`

const Search = styled.div`
    order: 3;
    width: 880px;
    height: 60%;
    background-color: #000000;
    text-align: center;
    color: #ffffff;
`