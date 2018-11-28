import React, { Component } from 'react';
import './App.css';
import {
  Switch,
  Route,
} from 'react-router-dom';
import NavBar from '../../components/Navbar/NavBar';
import userService from '../../utils/userService';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import Plant from '../../components/Plant/Plant';
import Home from '../../components/Home/Home'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }
  
  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
  }

  render() {
    return (
    <div className="App">
            <NavBar />
        <Switch>
            <Route exact path='/plants' render= {() => 
            <Plant />
            } />
            <Route exact path='/' render={() =>
            <Home />
            }/>
            <Route exact path='/signup' render={(props) =>
              <SignupPage
                  {...props}
                  handleSignup={this.handleSignup}
                />
              }/>
              <Route exact path='/login' render={(props) => 
                <LoginPage
                  {...props}
                  handleLogin={this.handleLogin}
                />
              }/>
        </Switch>
    </div>
    );
  }
}

export default App;
