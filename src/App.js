import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './Pages/Signup/Signup';
import UserDashboard from './Pages/UserPanel/Userpanel'
import Cart from './Pages/Cart/cart';
import OrderSucess from './Pages/Ordersucess/ordersucess';
import { ProtectedRoute } from "./ProtectedRoute";

function App() {
  const Routing =()=>{
    return(
    <Router>
      <div>
        <Switch>
         <Route exact path="/" component={Signup} ></Route>         
         <ProtectedRoute exact path="/userdashboard" component={UserDashboard} /> 
         <Route exact path="/ordersucess" component={OrderSucess} ></Route>         
         <Route exact path="/cart" component={Cart} ></Route>         
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
