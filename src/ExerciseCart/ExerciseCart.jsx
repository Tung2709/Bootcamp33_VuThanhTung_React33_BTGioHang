import React, { Component } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";
const cartData = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];

export default class ExerciseCart extends Component {
  state = {
    chiTietSP:[ {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
      soLuong:1,
    }],
    chiTietSP2:[ {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
      soLuong:1,
    }],
  };
  xemChiTiet = (click) => {
    this.setState({
      chiTietSP2:[click],
    })
  };
  addToCart=(sanphamchon)=>{
    let spGioHang={
    maSP: sanphamchon.maSP,
    tenSP: sanphamchon.tenSP,
    manHinh: sanphamchon.manHinh,
    heDieuHanh: sanphamchon.heDieuHanh,
    cameraTruoc: sanphamchon.cameraTruoc,
    cameraSau: sanphamchon.cameraSau,
    ram: sanphamchon.ram,
    rom: sanphamchon.rom,
    giaBan: sanphamchon.giaBan,
    hinhAnh: sanphamchon.hinhAnh,
    soLuong:1,
    }
    var gioHangCN=[...this.state.chiTietSP]
    let index=gioHangCN.findIndex(sp=>sp.maSP===spGioHang.maSP)
    console.log('index',index)
    if(index!==-1){
      gioHangCN[index].soLuong +=1
    }else{
      gioHangCN.push(spGioHang)
    }
    this.setState({
      chiTietSP:gioHangCN
    })
  }

  DelCart=(maSP)=>{
    var gioHangCN=this.state.chiTietSP.filter(sp=> sp.maSP!==maSP)
    this.setState({
      chiTietSP:gioHangCN
    })
  }

  tangGiamSoLuong=(maSP,tangGiam)=>{
    var giohangCN=[...this.state.chiTietSP]
    let index = giohangCN.findIndex(sp => sp.maSP===maSP)
    if(tangGiam){
      giohangCN[index].soLuong +=1
    }else{
      if(giohangCN[index].soLuong>1){
        giohangCN[index].soLuong -=1
      }
    }
    this.setState({
      chiTietSP:giohangCN
    })
  }
  render() {
    let tinhtong=this.state.chiTietSP.reduce((tsl,GH,index)=>
      { console.log('1',tsl)
        console.log('2',typeof (GH.soLuong))
        return tsl += GH.soLuong}
    ,0)
    let {
      maSP,
      tenSP,
      manHinh,
      heDieuHanh,
      cameraTruoc,
      cameraSau,
      ram,
      rom,
      giaBan,
      hinhAnh,
    } = this.state.chiTietSP2[0];
    
    return (
      <div className="container">
        <div className="text-center text-success">
        <h3 >Bài tập giỏ hàng</h3>
        </div>
        <Cart giohang={this.state.chiTietSP} DelCart={this.DelCart} tangGiamSoLuong={this.tangGiamSoLuong}/>
        <div className="text-end">
          <span className="text-danger" style={{cursor:'pointer',fontSize:"17px",fontWeight:"bold"}} data-bs-toggle="modal" data-bs-target="#modalId">
           Giỏ hàng ({tinhtong}) 
          </span>
          </div>
        <ProductList cartData={cartData} xemChiTiet={this.xemChiTiet} addToCart={this.addToCart}/>
        <div className="row my-3">
          <div className="col-4">
            <h3>{tenSP}</h3>
            <img
              src={hinhAnh}
              className="w-100"
              height={350}
              style={{ overFit: "contain" }}
              alt=""
            />
          </div>
          <div className="col-8">
            <h3>Thông tin sản phẩm</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Màn hình</th>
                  <td>{manHinh}</td>
                </tr>
                <tr>
                  <th>Hệ điều hành</th>
                  <td>{heDieuHanh}</td>
                </tr>
                <tr>
                  <th>Cam trước</th>
                  <td>{cameraTruoc}</td>
                </tr>
                <tr>
                  <th>Cam sau</th>
                  <td>{cameraSau}</td>
                </tr>
                <tr>
                  <th>Ram</th>
                  <td>{ram}</td>
                </tr>
                <tr>
                  <th>Rom</th>
                  <td>{rom}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
