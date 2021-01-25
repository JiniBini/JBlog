import React, { Component } from 'react';

class About extends Component {

  render() {

      return (
        <Layout>
        <Section>
          <h1>About JiniBini's JBlog</h1>
          <p>since 2020</p>
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
  
export default About;