import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
	const {item,chitiet,addToCart,index}=this.props
	console.log(item)
	return (
	  <div className='card'>
		<div className='card'>
		<img src={item.hinhAnh} className='w-100' height={350} style={{overFit:'contain'}} alt="" />
		<div className='card-body'>
			<p>{item.tenSP}</p>
			<p>{item.giaBan.toLocaleString()}</p>
			<button className='btn btn-success' onClick={()=>{chitiet(item)}}>Xem chi tiết</button>
			<button className='btn btn-danger mx-2' onClick={()=>{addToCart(item)}}>Thêm vào giỏ hàng</button>
		</div>
	</div>
	  </div>
	)
  }
}
