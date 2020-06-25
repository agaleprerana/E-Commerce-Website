import React, { useEffect, useState } from 'react';
//import data from '../data';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';

function ProductScreen(props){
    // console.log(props.match.params.id)
    // const product= data.products.find(x => x._id === props.match.params.id);
    const [qty, setQty]= useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error}= productDetails;
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(detailsProduct(props.match.params.id));
        return()=>{

        };
    },[])

    const handleAddToCart = ()=>{
        props.history.push("/cart/"+props.match.params.id + "?qty=" + qty)

    }

    return <div >
        <div className="back-to-result">
            <Link to="/">Back to result</Link>
        </div>
        {loading ? <div>loading...</div>:
        error ? <div>{error}</div>:
            (
                <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product"></img>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                       Price: Rs {product.price}
                    </li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                        Price: Rs {product.price}
                    </li>
                    <li>Status: {product.countInStock >0? "Instock":"Out of Stock"}</li>
                    <li>
                        Qty: <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                            {[...Array(product.countInStock).keys()].map(x=>
                                <option value={x+1}>{x+1}</option>
                                )}
                        </select>
                    </li>
                    <li>
                        {product.countInStock> 0 &&  <button onClick={handleAddToCart} className="button primary">Add to cart</button>}
                       
                    </li>
                </ul>
            </div>
        </div>
            )
        }
        
    </div>
}

export default  ProductScreen;