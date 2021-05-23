import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ResetPassword from "./pages/ResetPassword";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import styled from "styled-components";
import Ably from "./img/ably.jpeg";

const AblyBlock = styled.div`
    width: 100%;
    max-width: 360px;
    padding: 40px 30px;
    margin: 0 auto;
    box-sizing: border-box;
    
    .logo {
        width: 100%;
        height: 100%;
    }
`

function App() {
  return (
      <AblyBlock>
          <img
              src={Ably}
              alt="Ably"
              className="logo"
          />
        <Router>
            <Switch>
                <Route exact path="/" component={LoginPage}/>
                <Route path="/reset-password" component={ResetPassword}/>
                <Route path="/user" component={ProfilePage}/>
            </Switch>
        </Router>
      </AblyBlock>
  );
}

export default App;
