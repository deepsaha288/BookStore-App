 import AxiosService from './AxiosService';

const axios = new AxiosService();

export default class userService {
    // baseUrl = " https://backend-bookstore.herokuapp.com/";
    baseUrl='https://new-bookstore-backend.herokuapp.com/bookstore_';
 
    userRegistration = (data) => {
        return axios.postMethod(`${this.baseUrl}user/registration`, data);
    }

    userlogin =(data) =>{
        return axios.postMethod(`${this.baseUrl}user/login`, data);
    }


    getAllBooks = ()=>{
        return axios.getMethod(`${this.baseUrl}user/get/book`)       
    }


    addtocart =(product_id,data)=>{
        return axios.postMethod(`${this.baseUrl}user/add_cart_item/${product_id}`,data,{
            headers:{
                'x-access-token':localStorage.getItem('usertoken'),
            }
        });
    }
    
    getCartItems=()=>{
        return axios.getMethod(`${this.baseUrl}user/get_cart_items`,{
            headers:{
                'x-access-token' :localStorage.getItem('usertoken'),
            } 
        })       

    } 
    cartIncrementDecrement=(data,cartItem_id)=>{
        return axios.putMethod(`${this.baseUrl}user/cart_item_quantity/${cartItem_id}`,data,{
            headers:{
                'x-access-token' :localStorage.getItem('usertoken'),
            } 
        })     
    }
    userDetails=(data)=>{
        return axios.putMethod(`${this.baseUrl}user/edit_user`,data,{
            headers:{
                'x-access-token' :localStorage.getItem('usertoken'),
            } 
        })     

    }

   order=(data)=>{
        console.log(localStorage.getItem('usertoken'));
        return axios.postMethod(`${this.baseUrl}user/add/order`,data,{
            headers:{
                'x-access-token':localStorage.getItem('usertoken'),
            }
        });
    }
    removeCartItem=(id)=>{
        console.log(id);
        return axios.deleteMethod(`${this.baseUrl}user/remove_cart_item/${id}`,{
            headers:{
                'x-access-token':localStorage.getItem('usertoken'),
            }
        });
    } 
    addtowishlist =(product_id)=>{
        console.log(product_id);
        console.log(localStorage.getItem('usertoken'));
        return axios.postMethod(`${this.baseUrl}user/add_wish_list/${product_id}`,null,{
            headers:{
                'x-access-token':localStorage.getItem('usertoken'),
            }
        });
    }
}