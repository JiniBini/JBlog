import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Layout/Header';
import Navigation from './Layout/Navigation';
import Footer from './Layout/Footer';
import Router from './Routes/Router';
import Sidebar from './Layout/Sidebar';
import './fonts.css';



class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Navigation />
        <Content>
          <Sidebar></Sidebar>
          <Router />
        </Content>
        <Footer></Footer>
      </Layout>
    );
  }
}

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  font-family: 'Roboto', sans-serif;
`
const Content = styled.div`
  width: 80%;
  height: 80%;
  padding: 5px;
  display: flex;
  flew-flow: column wrap;
`

export default App;