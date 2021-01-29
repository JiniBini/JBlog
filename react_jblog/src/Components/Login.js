import React, { Component } from 'react';
import styled from 'styled-components';
import { GoogleLogin } from 'react-google-login';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      provider: '',
    }
  }
  // for google login
  responseGoogle = (res) => {
    console.log(res)
  }

  // Login Fail
  responseFail = (err) => {
    console.error(err);
  }

  render() {

    return (
      <Layout>
        <GoogleLogin
          clientId={process.env.REACT_APP_Google}
          buttonText="Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseFail}
        />
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

export default Login;