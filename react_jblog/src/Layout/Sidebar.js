import React, { Component } from 'react';
import styled from 'styled-components';

class Sidebar extends Component {
    render() {
        return (
            <Side><h2>Side menu</h2>
                <Section>
                    <p>information</p>
                </Section>

            </Side>
        );
    }
}

const Side = styled.div`
    width: 15%;
    height: 80%;
    text-align: center;
    border: 1px solid #d1d8e4;
`

const Section = styled.div`
  width: 100%;
  text-align: center;
  border: 1px solid #d1d8e4;
`

export default Sidebar;