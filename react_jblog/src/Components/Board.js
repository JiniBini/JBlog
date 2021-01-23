import React, { Component } from 'react';
import styled from 'styled-components';

class Board extends Component {

  render() {
    return (
      <Layout>
        <Section>
          <h1>Board </h1>

          <h3>free</h3>
        </Section>
      </Layout>
    );
  }
}


const Layout = styled.div`
  width: 880px;
  height: 75%;
  background-color: #000000;
  text-align: center;
  color: #ffffff;
`
const Section = styled.div`
  width: 100%;
  border: 1px solid #d1d8e4;
  margin-left: 15px;
`

export default Board;