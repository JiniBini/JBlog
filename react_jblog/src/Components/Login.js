import React, { Component } from 'react';
import styled from 'styled-components';

class Login extends Component {

  render() {

    return (
      <Layout>
        <Section>
          <h1>LoginPage</h1>
          <p>Login : <input></input></p>
          <p>PW : <input type="password"></input></p>
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

export default Login;