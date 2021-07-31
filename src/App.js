import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import first from './components/first'
import login from './components/login';
import register from './components/register';


function App() {
  return (
    <Router> 
      <Switch>
        <Route path="/" exact component={first}></Route>
        <Route path="/login" exact component={login}></Route>
        <Route path="/register" exact component={register}></Route>
        
      </Switch>
    </Router>
  )
}

export default App;
