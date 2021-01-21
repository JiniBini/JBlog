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
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-flow: row wrap;
`
const Section = styled.div`
  width: 80%;
  margin: 0 auto;
`

export default Board;