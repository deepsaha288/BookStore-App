import react from 'react';
import '../Header/Header.scss';
import Book from '../../Assets/education.svg'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { BrowserRouter as  Link } from 'react-router-dom';

export default class Appbar extends react.Component{
    constructor(props){
        super(props);
       
    }
    sendSearchtext =(e)=>{
    
    }
    render(){
        return(
            <>
           <div className="appbar">
               <div>
            <img src={Book}  alt=""/>
              <p><Link to ="/Dashboard" style={{listStyleType:"none",color:'white',textDecoration:'none'}}>Bookstore</Link></p> 
              <div className="input">
               < SearchOutlinedIcon className="searchicon" />   
              <input type="text" placeholder="Search" onChange={this.sendSearchtext}/>
              </div> 
              </div>
              <div>
              <div className="pro">
               < PermIdentityIcon className="proicon" />
               Profile
              </div>
              <Link to ="/cart"> 
              <div className="cart">
                < ShoppingCartOutlinedIcon className="carticon" />
                  Cart
              </div>
              </Link>
            </div>
            </div>
            </>
        )
    }
}