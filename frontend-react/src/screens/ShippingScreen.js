import React, {  useState } from 'react';
//import data from '../data';
import { useDispatch} from 'react-redux';
//import {Link} from 'react-router-dom';
import { saveShipping } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';


function ShippingScreen(props){

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode]= useState('');
    
   
    const dispatch = useDispatch();


    
    

    const SubmitHandler =(e)=>{
        e.preventDefault();

        dispatch(saveShipping({address, city, pincode}));
        props.history.push('payment')
    }
    

    return <div>
        <CheckoutSteps step1 step2></CheckoutSteps>
    

    <div className="form">
        <form onSubmit={SubmitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Shipping</h2>
                </li>
                
                <li>
                    <label htmlFor="address">
                        Address
                    </label>
                    <input type="text" name="address" id="address" onChange={(e)=> setAddress(e.target.value)}>

                    </input>
                </li>

                <li>
                    <label htmlFor="city">
                        City
                    </label>
                    <input type="text" name="city" id="city" onChange={(e)=> setCity(e.target.value)}>

                    </input>
                </li>

                <li>
                    <label htmlFor="pincode">
                        Pincode
                    </label>
                    <input type="text" name="pincode" id="pincode" onChange={(e)=> setPincode(e.target.value)}>

                    </input>
                </li>
                
                <li>
                    <button type="submit" className="button primary">Continue</button>

                </li>
               
                
            </ul>

        </form>
    </div>
    </div>
}

export default  ShippingScreen;

