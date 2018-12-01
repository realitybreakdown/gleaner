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
import PlantsPage from '../../components/PlantsPage/PlantsPage';
import Home from '../../components/Home/Home';
import ailmentService from '../../utils/ailmentService';
import AilmentsPage from '../../components/AilmentsPage/AilmentsPage';
import plantService from '../../utils/plantService';
// import NewPlantPage from '../NewPlantPage/NewPlantPage';
import PlantForm from '../../components/PlantForm/PlantForm';
import PlantDetail from '../../components/PlantDetail/PlantDetail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ailments: [],
      plants: []
    };
  }

  handleCreatePlant = (plant) => {
    this.setState(curState => ({
      plants: [...curState.plants, plant]
    }));
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
    ailmentService.getAll()
    .then(ailments => {
      this.setState({ailments});
    });
    plantService.getAllPlants()
    .then(plants => {
      this.setState({plants});
    });
  }

  render() {
    return (
    <div className="App">
            <NavBar 
            user={this.state.user}
            handleLogout={this.handleLogout}
            />
        <Switch>
            <Route exact path='/plants' render= {() => 
              <PlantsPage plants={this.state.plants}/>
            } />
            <Route exact path='/plants/:id' render= {(props) => 
              <PlantDetail
                {...props}
                ailments={this.state.ailments}
              />
            } />
            <Route exact path='/' render={() =>
              <Home ailments={this.state.ailments}/>
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
            <Route exact path='/ailments/:id' render={(props) =>
              <AilmentsPage {...props} />
            }/>
            <Route exact path='/newplant' render={({history}) =>
              <PlantForm
                handleCreatePlant={this.handleCreatePlant} 
                history={history}
              />
            }/>
        </Switch>
    </div>
    );
  }
}

export default App;
