import React from 'react';
import './LoginDisplay.scss';
import LoginImage from '../../Assets/loginimage.png';
import { TextField, Button } from '@material-ui/core';
import UserService from '../../Services/UserService';
import Login from '../../Pages/Login/Login';


const service = new UserService();

export default class LoginDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            login: false,
            fullName: "",
            email: "",
            password: "",
            mobile: "",
            fullNameError: false,
            emailError: false,
            passwordError: false,
            mobileError: false,
            fullNameErrormsg: "",
            emailErrormsg: "",
            passwordErrmsg: "",
            mobileErrmsg: "",
        })
    }
    

    validationCheck = () => {
        this.setState({
            fullNameError: false,
            fullNameErrormsg: '',
            emailError: false,
            emailErrormsg: '',
            passwordError: false,
            passwordErrormsg: '',
            mobileError:false,
            mobileErrormsg:""
            })
        var valid = true;
        if (this.state.fullName.length === 0) {
            this.setState({ fullNameError: true })
            this.setState({ fullNameErrormsg: "Enter full name " })
            valid = false;
        }


        let patter = "^[0-9a-zA-Z]+([.\\-_+][0-9a-zA-Z]+)*@[a-z0-9A-Z]+.[a-z]{2,4}([.][a-zA-Z]{2,})*$";
        let pattern = new RegExp(patter);
        if (!pattern.test(this.state.email)) {
            this.setState({ emailError: true })
            this.setState({ emailErrormsg: "Invalid Email address" })
            valid = false;
        }
        if (this.state.email.length === 0) {
            this.setState({ emailError: true })
            this.setState({ emailErrormsg: "Choose Email address" })
            valid = false;
        }

        if (this.state.password.length < 8) {
            this.setState({ passwordError: true })
            this.setState({ passwordErrormsg: "password should be atleast 8 characters" })
            valid = false;
        }

        if (this.state.password.length === 0) {
            this.setState({ passwordError: true })
            this.setState({ passwordErrormsg: "Enter a password" })
            valid = false;
        }

        if (this.state.mobile.length === 0) {
            this.setState({ mobileError: true })
            this.setState({ mobileErrormsg: "Enter a mobile" })
            valid = false;
        }

        return valid;

    }

    
    changetoSignup = () => {
        this.setState({ login: true })
    }
    changetologin = () => {
        this.setState({ login: false })
    }
    signUp=(e)=>{
       
          }
    Login=()=>{
    
    }


    render() {
        return (<>
                <div className="imagebody">
                <img src={LoginImage} style={{ borderRadius: '50%', width: '215px', height: '215px' }} alt="" />
                         <div className="online"> ONLINE BOOK SHOPPING</div></div>
                    <div className="form">
                       <div className="inlinelinks"> 
                       <div onClick={this.changetoSignup}>Login</div> 
                        <div onClick={this.changetologin}>Signup</div>
                        </div>
                        { this.state.login ? <Login /> : <><TextField
                                id="outlined-basic"
                                label="Fullname"
                                className="textField"
                                variant="outlined"
                                margin='dense'
                                name="fullName"
                                error={this.state.fullNameError}
                                helperText={this.state.fullNameErrormsg}
                                onChange={(e) => this.changeState(e)}
                            /> <TextField
                                    id="outlined-basic"
                                    label="Email "
                                className="textField"

                                    variant="outlined"
                                    margin='dense'
                                    name="email"
                                    onChange={(e) => this.changeState(e)}
                                    error={this.state.emailError}
                                    helperText={this.state.emailErrormsg}
                                /> <TextField
                                    id="outlined-basic"
                                    label="Password"
                                    className="textField"
                                    variant="outlined"
                                    margin='dense'
                                    name="password"
                                    onChange={(e) => this.changeState(e)}
                                    error={this.state.passwordError}
                                    helperText={this.state.passwordErrormsg}
                                /> <TextField
                                    id="outlined-basic"
                                    label="mobile"
                                    variant="outlined"
                                    margin='dense'
                                    className="textField"
                                    name="mobile"
                                    onChange={(e) => this.changeState(e)}
                                    error={this.state.mobileError}
                                    helperText={this.state.mobileErrormsg}
                                />
                                <Button variant="contained"  onClick={(e)=>this.signUp(e)}>Signup</Button> </>}
                               
                    </div>

        </>)
    }
}