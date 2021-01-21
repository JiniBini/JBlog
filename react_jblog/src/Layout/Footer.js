import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './img/simple_logo.png';

class Footer extends Component {
    render() {
        return (
            <Foot>@JiniBini</Foot>
        );
    }
}

const Foot = styled.div`
    position:absolute;
    bottom:0;
    width:100%;
    height: 50px;
    text-align: center;
`



export default Footer;
