import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';


import {  detailsOrder } from '../actions/orderActions';

function OrderScreen(props) {

  const orderPay = useSelector(state => state.orderPay);
  const { loading: loadingPay, success: successPay, error: errorPay } = orderPay;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successPay) {
      props.history.push("/profile");
    } else {
      dispatch(detailsOrder(props.match.params.id));
    }
    return () => {
    };
  }, [successPay]);

  
  const submitok=()=> {
    window.location.reload(false);
    props.history.push("/");
  }
  

  const orderDetails = useSelector(state => state.orderDetails);
  const { loading, order, error } = orderDetails;
  

  return loading ? <div>Loading ...</div> : error ? <div>{error}</div> :

    <div>
      <div className="placeorder">
        <div className="placeorder-info">
          <div>
            <h3>
              Shipping
          </h3>
            <div>
              {order.shipping.address}, {order.shipping.city},
          {order.shipping.pincode}
          </div>
            <div>
              {order.isDelivered ? "Delivered at " + order.deliveredAt : "Not Delivered."}
            </div>
          </div>
          <div>
            <h3>Payment</h3>
            <div>
              Payment Method: {order.payment.paymentMethod}
            </div>
            <div>
              {order.isPaid ? "Paid at " + order.paidAt : "Not Paid."}
            </div>
            <div>
        <ul className="cart-list-container">
          <button className="button primary full width" onClick={submitok}>Click here to save details</button>
          </ul>
        </div>
          </div>
          


        </div>
       
        

      </div>
    </div>

}

export default OrderScreen;