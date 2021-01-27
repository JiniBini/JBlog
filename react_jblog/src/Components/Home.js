import React, { Component } from 'react';
import styled from 'styled-components';

class Home extends Component {

  render() {

    return (
      <Layout>
        <Section>
          <h1>JBlog Main</h1>
          <h3>미완성 Home</h3>
        </Section>
      </Layout>
    );
  }
}


const Layout = styled.div`
  margin-left: 15px;  
  width: 1000px;
  height: 75%;
  text-align: center;
`
const Section = styled.div`
  width: 100%;
  border: 1px solid #d1d8e4;
`

export default Home;