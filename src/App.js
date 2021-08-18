import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import first from './components/first'
import login from './components/login';
import register from './components/register';
import home1 from './components/home1';


function App() {
  return (
    <Router> 
      <Switch>
        <Route path="/" exact component={first}></Route>
        <Route path="/login" exact component={login}></Route>
        <Route path="/register" exact component={register}></Route>
        <Route path="/home" exact component={home1}></Route>
        
      </Switch>
    </Router>
  )
}

export default App;
