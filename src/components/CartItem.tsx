import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';

interface cartItemType{
    "name":string;
    "price":number;
    "quantity":number;
    "totalPrice":number;
}

export const CartItem = ({name,price,quantity,totalPrice}:cartItemType) => {
  return (
   <div className='d-flex justify-content-start '>
    <p className="font-weight-bold"   style={{width:"250px"}}>{name}</p>
    <div className='font-weight-bold'   style={{width:"250px"}}>{formatCurrency(price)}<div></div></div>
    <div className='font-weight-bold'   style={{width:"300px"}}>{quantity}</div>
    <div className='font-weight-bold'   style={{width:"250px"}}>{formatCurrency(totalPrice)}</div>  
   </div>
  )
}
