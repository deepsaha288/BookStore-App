import React from 'react';
import '../Signup/Signup.scss';
import LoginDisplay from '../../Components/LoginDisplay/LoginDisplay'
 
export default class Signup extends React.Component{
    render(){
        return(
        <>
        <div className="fullbody">
            <LoginDisplay />
        </div>
        </>)
    }
}