import React from 'react';
import './Signup.scss';
import LoginPart from '../../Components/DisplyaBook/LoginPart'
 
export default class Signup extends React.Component{
    render(){
        return(
        <>
        <div className="fullbody">
            <LoginPart />
        </div>
        </>)
    }
}