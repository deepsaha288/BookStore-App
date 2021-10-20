import react from 'react';
import './Appbar.scss';
import Book from '../../Assets/education.svg'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import UserService from '../../Services/UserService';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Avatar } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";



const service = new UserService();
export default class Appbar extends react.Component {

  constructor(props) {

    super(props);
    this.state = ({
      anchorEl: null,

    })
    
  }

  handleClick = (event) => {
    console.log(event)
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };


  refresh = () => {
    service.getCartItems().then((res) => {
      console.log(res);
      this.setState({ _cartbooks: res.data.result.length })
    })
  }
  sendSearchtext = (e) => {
    this.props.search(e);
  }

  render() {
    const open = Boolean(this.state.anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
      <>
        <div className="appbar">
          <div>
            <img src={Book} alt="" />
            <p><Link to="/userdashboard" style={{ listStyleType: "none", color: 'white', textDecoration: 'none' }}>Bookstore</Link></p>

            {this.props.show && <div className="input">
              < SearchOutlinedIcon className="searchicon" />
              <input type="text" placeholder="Search" onChange={this.sendSearchtext} />
            </div>}
          </div>
          <div>
              <div className="pro"> <PermIdentityIcon aria-describedby={id} variant="contained" color="primary" onClick={this.handleClick} />
                Profile
              </div>
              <Popover  PaperProps={{
          style: { width: '20%', padding:'10px' },
        }}
                id={id}
                open={open}
                anchorEl={this.state.anchorEl}
                onClose={this.handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <div className="new">
                <Typography >
                <MenuItem className="visible">
                    <Avatar/>
                  </MenuItem>
                 <MenuItem>Deep</MenuItem>
                 <div className="popup">
                    <Link to="/WishList">
                     <button className="btn1">WishList</button> 
                    </Link>
                    <Link to="/logout">
                     <button className="btn1">Logout</button>
                     </Link>
                     </div>
                </Typography>
                </div>
              </Popover>
              <Link to="/cart">
                <div className="root">
                  <Badge color="secondary" badgeContent={this.props.cartLength.length} showZero>
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