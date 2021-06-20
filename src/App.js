import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './Pages/Signup/Signup';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  const Routing =()=>{
    return(
    <Router>
      <div>
        <Switch>
         <Route exact path="/" component={Signup} ></Route> 
         <Route path="/Dashboard" component={Dashboard}></Route>        
         </Switch>
      </div>
    </Router>)
  }
  return (
    <>
     < Routing />
    </>
  );
}

export default App;
