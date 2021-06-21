import AxiosService from './AxiosService';

const axios = new AxiosService();

export default class userService {
    baseUrl = " https://backend-bookstore.herokuapp.com/";
 
    adminlogin =(data) =>{
        return axios.postMethod(`${this.baseUrl}bookstore_user/admin/login`, data);
    }
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
   

    deleteBook =(product_id)=>{
        console.log(product_id);
        return axios.deleteMethod(`${this.baseUrl}bookstore_user/admin/delete/book/${product_id}`,{
            headers:{
                'x-access-token':localStorage.getItem('token'),
            }
        });
    }

    updateBook =(data,product_id)=>{
        return axios.putMethod(`${this.baseUrl}bookstore_user/admin/update/book/${product_id}`,data,{
            headers:{
                'x-access-token':localStorage.getItem('token'),
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
}