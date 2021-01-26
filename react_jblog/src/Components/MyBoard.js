import React, { Component } from 'react';
import styled from 'styled-components';

class MyBoard extends Component {

  render() {

      return (
        <Layout>
        <Section>
          <h1>My Board</h1>
          <p>Board1</p>
        </Section>
      </Layout>
      );
    }
  }

const Layout = styled.div`
  margin-left: 15px;  
  width: 880px;
  height: 75%;
  text-align: center;
`
const Section = styled.div`
  width: 100%;
  border: 1px solid #d1d8e4;
`
  
export default MyBoard;