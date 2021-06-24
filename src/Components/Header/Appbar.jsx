import react from 'react';
import './Appbar.scss';
import Book from '../../Assets/education.svg'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import UserService from '../../Services/UserService';


const service = new UserService();
export default class Appbar extends react.Component{
  
     constructor(props){
       
         super(props);
         this.state = ({
          _cartbooks:"",
          
      })
    
     
    }
    componentDidMount() {
      service.getCartItems().then((res) => {
          console.log(res);
          this.setState({ _cartbooks: res.data.result.length });
          // this.props.history.push('/userdashboard')
      })
  }
  
        
    sendSearchtext =(e)=>{
      this.props.search(e.target.value);
    }
    render(){
        return(
            <>
           <div className="appbar">
               <div>
            <img src={Book}  alt=""/>
              <p><Link to ="/userdashboard" style={{listStyleType:"none",color:'white',textDecoration:'none'}}>Bookstore</Link></p> 
             
              {this.props.show && <div className="input">
               < SearchOutlinedIcon className="searchicon" />   
              <input type="text" placeholder="Search" onChange={this.sendSearchtext}/>
              </div> }
              </div>
              <div>
              <div className="pro">
               < PermIdentityIcon className="proicon" />
               Profile
              </div>
              <Link to ="/cart"> 
             
              <div className="root">
              <Badge color="secondary" badgeContent={this.state._cartbooks} showZero>
             
              <div className="cart">
                < ShoppingCartOutlinedIcon className="carticon" /> 
                 Cart 
              </div>
               </Badge>
              </div>
              </Link>
            </div>
            </div>
            </>
        )
    }
}