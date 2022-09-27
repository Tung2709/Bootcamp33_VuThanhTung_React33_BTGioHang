import React, { Component } from 'react'

export default class Cart extends Component {
  render() {
	const {giohang,DelCart,tangGiamSoLuong}=this.props
	console.log('giohang',giohang)
	return (
	 <div>
  <div className="modal fade" id="modalId" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="modalTitleId">Giỏ hàng</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <table className='table'>
			<thead>
				<tr>
					<td>Mã SP</td>
					<td>Hình ảnh</td>
					<td>Tên SP</td>
					<td>Số lượng</td>
					<td>Đơn giá</td>
					<td>Thành tiền</td>
					<td></td>
				</tr>
			</thead>
			<tbody>
				
					{giohang.map((sp,index)=>{
						return(
							<tr key={index}>
							<td>{sp.maSP}</td>
					<td><img src={sp.hinhAnh} alt="..." width={50} height={75}/></td>
					<td>{sp.tenSP}</td>
					<td>
						<button className='btn btn-primary mx-2' onClick={()=>{tangGiamSoLuong(sp.maSP,true)}}>+</button>
						{sp.soLuong}
						<button className='btn btn-primary mx-2' onClick={()=>{tangGiamSoLuong(sp.maSP,false)}}>-</button>
						</td>
					<td>{sp.giaBan.toLocaleString()}</td>
					<td>{(sp.soLuong*sp.giaBan).toLocaleString()}</td>
					<td><button className='btn btn-danger' onClick={()=>{DelCart(sp.maSP)}}>Xóa</button></td>
					</tr>
						)
					})}
					
				
			</tbody>
			<tfoot >
				<tr>
					<td colspan='5'></td>
					<td>Tổng tiền</td>
					<td>
						{
							this.props.giohang.reduce((tongtien,tiensp,index)=>{
								 tongtien += tiensp.giaBan*tiensp.soLuong
								 return tongtien.toLocaleString()
							},0)
						}
					</td>
				</tr>
			</tfoot>
		  </table>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
  {/* Optional: Place to the bottom of scripts */}
</div>

	)
  }
}
