import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './Pages/Signup/Signup';
import UserDashboard from './Pages/UserPanel/Userpanel'
import Cart from './Pages/Cart/cart';
import OrderSucess from './Pages/Ordersucess/ordersucess';
import { ProtectedRoute } from "./ProtectedRoute";
import WishList from './Pages/WishList/WishList';

function App() {
  const Routing =()=>{
    return(
    <Router>
      <div>
        <Switch>
         <Route exact path="/" component={Signup} ></Route>         
         <ProtectedRoute exact path="/userdashboard" component={UserDashboard} /> 
         <ProtectedRoute exact path="/ordersucess" component={OrderSucess} ></ProtectedRoute>         
         <ProtectedRoute exact path="/cart" component={Cart} ></ProtectedRoute>  
         <ProtectedRoute path="/WishList" component={WishList} />     
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
