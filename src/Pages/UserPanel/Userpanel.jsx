import React from 'react';
import Appbar from '../../Components/Header/Appbar';
import './Userpanel.scss'
import UserService from '../../Services/UserService';
import Dont from "../../Assets/don't.png";
import { Button } from '@material-ui/core';
import Paginations from "@material-ui/lab/Pagination";
import Typography from "@material-ui/core/Typography";


const service = new UserService();

class UserDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            _books: [],
            _cartBooks: [],
            postsPerPage: "10",
            currentPage: "1",
            filterData: [],
            _wishlistbooks:[],
            open: false,
            
        })
    }
    storeBooks = (books) => {
        this.books = books;
        return this.books;
    }
    getBooks = () => {
        return this.books;
    }

    componentDidMount() {
        this.GetAllBooks();
        this.GetcartItems();
        this.getWishlistItem();
    }

    GetAllBooks = () => {
        var books = [];
        service.getAllBooks().then((res) => {
            books = res.data.result;
            var boo = this.storeBooks(books);
            this.setState({ _books: boo, filterData: books });
        }).catch((err) => {
            console.log(err);
        })
    }
    
    getWishlistItem = () => {
        service.getWishlist().then((data) => {
            this.setState({ _wishlistbooks: data.data.result  });
        }).catch(error => {
            console.log("error", error);
        })

    }
    GetcartItems = () => {
        let token = localStorage.getItem('token');
        service.getCartItems().then((res) => {
            console.log(res);
            this.setState({ _cartBooks: res.data.result });
        }).catch((err) => {
            console.log(err);
        })
    }
    addToCart = (book) => {
        console.log("im calles");
        let data = {
            isCart: true
        }
        service.addtocart(book._id, data).then((res) => {
            console.log(res);
            this.GetAllBooks();
            this.GetcartItems();
        }).catch((err) => {
            console.log(err);
        })

    }
    addToWishlist = (productid) => {
        service.addtowishlist(productid).then((res) => {
            console.log(res);
            this.GetAllBooks();
            this.getWishlistItem();
        }).catch((err) => {
            console.log(err);
        })
    }
    checkCartItem = (bookname) => {
        let check = false;
        this.state._cartBooks.map((val) => {
            if (val.product_id.bookName === bookname) {
                check = true
            }
        })
        return check;
    }
    checkWishlistItem = (bookname) => {
      
         let check = true;
        this.state._wishlistbooks.map((val) => {
            console.log(val,bookname)
            if (val.product_id.bookName === bookname) {
                 check = false
            }
        })
         return check;
    }

    changepage = (e, newpage) => {
        console.log(e.target.value);
        this.setState({ currentPage: newpage });
    };

    searchM = (e) => {
        console.log("hello filter")
        let booksFilter = [...this.state._books].filter((val) => {
            return val.bookName.indexOf(e.target.value) != -1;
        });
        console.log("filter", booksFilter)
        if (e.target.value === '') {
            this.setState({ _books: this.state.filterData });
        } else {
            this.setState({ _books: booksFilter });
        }
    }

 descriptionshow = (e) => {
    e.stopPropagation();
    this.setState({open:true});
  
  }
 descriptionhide = (e) => {
    e.stopPropagation();
    this.setState({open:false});
    
  }


    itemSort = (e) => {

        if (e.target.value === "asec") {
            let sortData = [...this.state._books].sort(function (a, b) {
                return a.price - b.price
            });
            console.log(sortData)
            this.setState({ _books: sortData });
        }
        else if (e.target.value === "dsec") {
            let sortData = [...this.state._books].sort(function (a, b) {
                return b.price - a.price
            });
            console.log(sortData)
            this.setState({ _books: sortData });
        }

    };

    render() {
        const LastBook = this.state.currentPage * this.state.postsPerPage;
        const FirstBook = LastBook - this.state.postsPerPage;
        const currentBooks = this.state._books.slice(FirstBook, LastBook);
        return (
            <>
                < Appbar show={true} cartLength={this.state._cartBooks} search={this.searchM} />
                <div className="usercontent">
                    <div className="inlineheader">
                        <div className="headers">
                            Books
                        </div>
                        <div>
                            <select className="option" onChange={(e) => this.itemSort(e)} >
                                <option selected >Sort by relevance</option>
                                <option value="dsec" >Price: high to low</option>
                                <option value="asec"  >Price: low to high</option>
                            </select>
                        </div>
                    </div>
                    <div className="books">
                        {currentBooks.map((book, index) => {
                            return <div className="showbooks">
                                <div className="bookimage">
                                    {book.quantity==1 ?
                                    <div className="outOfStock"onMouseOver={(e) => this.descriptionshow(e)} onMouseLeave={(e) => this.descriptionhide(e)}>
                                       Out Of Stock 
                                    </div>
                                   : 
                                    <>
                                    </>
                                }
                                    <img src={Dont} alt="" />
                                </div>
                                <div className="content">
                                    <div className="bookname">{book.bookName}</div>
                                    <div className="author">by{book.author}</div>
                                    <div className="rating">
                                        <div className="rate">4.5 &#9733;</div>
                                    </div>
                                    <div className="price">Rs.{book.price}</div>
                                    <div className="inlinebuttons" >
                                        {this.checkWishlistItem(book.bookName)
                                           ?
                                          <div>
                                        {this.checkCartItem(book.bookName) ?
                                           <>
                                           <Button variant="contained" fullWidth className="addedtobag">Added to bag</Button>
                                          </>
                                          :
                                          <>
                                        <Button variant="contained" className='addtobag' onClick={() => this.addToCart(book)} color="primary">
                                     AddtoBag </Button>
                                  
                                     <Button variant="contained" className='wishlist' color="default" onClick={() => this.addToWishlist(book._id)}>
                                     Wishlist </Button>
                                     </>
                                  } </div>
                                  :
                                  <Button variant="contained" fullWidth className="addedtobag" >WishList </Button>
                                }
                              </div>
                                    <div className="descClass">
                                        <Typography className="bookName">Book Details</Typography>
                                        <Typography className="bookName">{book.bookname}</Typography>
                                        {book.description}
                                    </div>
                                </div>
                            </div>
                        })
                        }
                    </div>
                    <div className="paginationBlock">
                        <Paginations
                            count={Math.floor(this.state._books.length / this.state.postsPerPage + 1)}
                            variant="outlined"
                            shape="rounded"
                            onChange={this.changepage}
                        />
                    </div>
                </div>
            </>
        )
    }
}
export default UserDashboard;