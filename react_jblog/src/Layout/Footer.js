import React, { Component } from 'react';
import styled from 'styled-components';


class Footer extends Component {
    render() {
        return (
            <Container>
                <Foot>
                    <a href="https://github.com/JiniBini/JBlog" target="blank">@JiniBini</a>
                </Foot>
            </Container>
        );
    }
}

const Container = styled.div`
    width: 100%;
    height: 4%;
    border-top: 1px solid #d1d8e4;
    display: flex;
    flex-flow: row wrap;
    position: absolute;
    bottom: 0%;
`

const Foot = styled.div`
    order: 1;
    width: 100%;
    height: 100%;
    text-align: center;
`


export default Footer;
