import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class ProductList extends Component {
  renderItem=()=>{
    const {cartData,xemChiTiet,addToCart}=this.props;
   return cartData.map((item,index)=>{
    return(
      <div className='col-4' key={index}>
          <ProductItem  item={item} chitiet={xemChiTiet} addToCart={addToCart}/>
      </div>
    )
   })
  }
  render() {
    
    return (
      <div className='row'>
          {this.renderItem()}
      </div>
    )
  }
}
