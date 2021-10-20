import React, { Component } from 'react'
import './Wishlist.scss';
import Appbar from '../../Components/Header/Appbar';
import Footer from '../../Components/Footer/footer';
import Button from '@material-ui/core/Button';
import Dont from "../../Assets/don't.png";
import DeleteIcon from '@material-ui/icons/Delete';
import UserService from '../../Services/UserService';
// import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


const service = new UserService();

export default class WishList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            _books: [],
            _cartBooks: [],
             
        }

    }

    componentDidMount() {
        this.getWishlistItem();
        this.GetcartItems();
        this.delete();
        
    }

    getWishlistItem = () => {
        service.getWishlist().then((data) => {
            console.log("whish list data -----", data.data.result);
            this.setState({ _books: data.data.result  });
        }).catch(error => {
            console.log("error", error);
        })

    }

    GetcartItems= () => {
        let token = localStorage.getItem('token');
        service.getCartItems().then((res) => {
            console.log(res);
            this.setState({ _cartBooks: res.data.result });
        }).catch((err) => {
            console.log(err);
        })
    }


    moveToCart = (book) => {    
    let Data = {
        isCart: true
      }
      service.addtocart(book._id, Data).then((res) => {
        console.log(res);
         this.GetcartItems();
        this.delete(book._id);
    }).catch((err) => {
        console.log(err);
    })
    }

    delete(e) {
         console.log("id ", e);
          service.deleteWishlistItem(e).then((data) => {
            console.log(data);
            this.getWishlistItem();
        }).catch(error => {
            console.log("error", error);
        })
    }

    render() {
       
        return (
            <div>
                <Appbar cartLength={this.state._cartBooks}/>
                <div className="CartBag-frame1">
                    <div className="title1">Home/My Wishlist</div>
                    <div className="cartBag-content1">
                        <div className="heading-wishlist">My Whislist </div>
                        {this.state._books.map((value, index) =>
                            <div className="main-cart1">
                                <div>
                                    <img className="img-book" src={Dont} alt="" />
                                </div>
                                <div className="text-content1">
                                    <div className="bag-text1">
                                        <div className="cart-title1">{value.product_id.bookName}</div>
                                        <div className="cart-bookAuthor1">by {value.product_id.author}</div>
                                        <div className="price1">Rs.{value.product_id.price}</div>
                                    </div>
                                    <div className="delelte-content">
                                    <div style={{ cursor: "pointer", color: "grey" }} onClick={() => this.delete(value.product_id._id)}><DeleteIcon />
                                     </div>
                                     </div>
                                     <div className="btn-content1"> 
                                        <Button variant="contained" className="btn-place1" onClick={()=>this.moveToCart(value.product_id)} >
                                           <span className="btn-move"> Move to cart </span>
                                        </Button>
                                    </div>
                            
                            </div>
                         </div>
                        )}
                    </div  >
                </div>
                <Footer />
            </div>
        )
    }
}