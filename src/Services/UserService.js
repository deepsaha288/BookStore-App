import AxiosService from './AxiosService';

const axios = new AxiosService();

export default class userService {
    baseUrl = " https://backend-bookstore.herokuapp.com/";
 
    userRegistration = (data) => {
        return axios.postMethod(`${this.baseUrl}bookstore_user/registration`, data);
    }

    userlogin =(data) =>{
        return axios.postMethod(`${this.baseUrl}bookstore_user/login`, data);
    }

    addBook =(data,token) =>{
        console.log(token);
        return axios.postMethod(`${this.baseUrl}bookstore_user/admin/add/book`, data,{
            headers:{
                'x-access-token':token,
            }
        });
    }
    getAllBooks = ()=>{
        return axios.getMethod(`${this.baseUrl}bookstore_user/get/book`)       
    }


    addtocart =(product_id,data)=>{
        return axios.postMethod(`${this.baseUrl}bookstore_user/add_cart_item/${product_id}`,data,{
            headers:{
                'x-access-token':localStorage.getItem('usertoken'),
            }
        });
    }
    
    getCartItems=()=>{
        return axios.getMethod(`${this.baseUrl}bookstore_user/get_cart_items`,{
            headers:{
                'x-access-token' :localStorage.getItem('usertoken'),
            } 
        })       

    } 
    cartIncrementDecrement=(data,cartItem_id)=>{
        return axios.putMethod(`${this.baseUrl}bookstore_user/cart_item_quantity/${cartItem_id}`,data,{
            headers:{
                'x-access-token' :localStorage.getItem('usertoken'),
            } 
        })     
    }
    userDetails=(data)=>{
        return axios.putMethod(`${this.baseUrl}bookstore_user/edit_user`,data,{
            headers:{
                'x-access-token' :localStorage.getItem('usertoken'),
            } 
        })     

    }

   order=(data)=>{
        console.log(localStorage.getItem('usertoken'));
        return axios.postMethod(`${this.baseUrl}bookstore_user/add/order`,data,{
            headers:{
                'x-access-token':localStorage.getItem('usertoken'),
            }
        });
    }
    removeCartItem=(id)=>{
        console.log(id);
        return axios.deleteMethod(`${this.baseUrl}bookstore_user/remove_cart_item/${id}`,{
            headers:{
                'x-access-token':localStorage.getItem('usertoken'),
            }
        });
    }       
}