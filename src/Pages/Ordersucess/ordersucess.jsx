import './ordersucess.scss';
import React from 'react';
import Appbar from '../../Components/Header/Appbar';
import Order from '../../Assets/order.PNG';
import Footer from '../../Components/Footer/footer';
import { Button} from '@material-ui/core';


export default class OrderSucess extends React.Component {
    constructor(props) {
        super(props);
    }
    goToDashboard=()=>{
        this.props.history.push('/userdashboard')
    }
    render() {
        return (
            <div>
                < Appbar />
                <div className="orderbody">
                    <div className="image">
                        <img src={Order} alt="" />
                    </div>
                    <div className="texts">
                        hurray!!! your order is confirmed the order  id is #12345 save the 
                        order id for further communication   
                    </div>
                     <div className="table">
                        <table>
                            <tr>
                                <th>Email us</th>
                                <th>Contact us</th>
                                <th>Address</th>
                            </tr>
                            <tr>
                                <td>admin@bookstore.com</td>
                                <td>#91 9916522077</td>
                                <td>Bangalore, Karnataka </td>
                            </tr>
                        </table>
                    </div>
                    <Button variant="contained" fullWidth className="continue-shop"onClick={this.goToDashboard}>CONTINUE SHOPPING</Button>

                </div> 
                     <Footer />
            </div>
        )
    }

}