import React, {  useEffect } from 'react';
import {Link} from 'react-router-dom';
//import data from '../data';
//import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';


function HomeScreen(props){
 
const category= props.match.params.id ? props.match.params.id : '';
 
 const productList = useSelector(state => state.productList);
 const {products, loading, error} = productList;
 const dispatch = useDispatch();

 useEffect(() =>{
  
      dispatch(listProducts(category));
   
   
   return()=>{  

   };
 }, [category])

 const submitHandler=(e)=>{
   e.preventDefault();
   dispatch(listProducts(category))
 }

    return <div className="content">
      {category &&
      <h2>{category}</h2>}

   
     {loading ? <div>Loading...</div>:
    error ? <div>{error}</div>:
    <ul className="products">
    { 
      products.map(product =>
        <li key={product._id}>
          <div className="product">
          <Link Link to={'/product/'+ product._id}>
          <img className="product-image" src={product.image} alt="product"/>
          </Link>
              
              <div className="product-name">
               <Link Link to={'/product/'+ product._id}>{product.name}</Link>
               </div>
              <div className="product-price">Rs {product.price} </div>
          </div>
      </li>

      )
    }
      
      
  </ul>
}
    </div>
    }

export default  HomeScreen;