import React from "react";
import data from "../data.json";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: "", currentData: [...data.products], cart: [] };
  }
  changeDisplay = event => {
    this.setState({ display: event.target.value });
    this.changeStateListener();
  };

  componentDidMount() {
    this.changeStateListener();
  }

  changeStateListener = () => {
    switch (this.state.display) {
      case "default":
        this.setState({ currentData: [...data.products] });
        break;
      case "highestprice":
        this.setState({ currentData: this.dataSort().reverse() });
        break;
      case "  ":
        this.setState({ currentData: this.dataSort() });
        break;
      default:
        this.setState({ currentData: [...data.products] });
        break;
    }
  };

  addToCart = val => {
    console.log(val);
    this.setState({ cart: this.state.cart.concat(val) });
  };

  dataSort = () => {
    // console.log("dataSort run");
    return data.products.sort(function(val1, val2) {
      return val1.price - val2.price;
    });
  };

  render() {
    return (
      <div className="right-container">
        <div className="rightcontainer-header">
          <small className="product-found">
            <span>16 Product found</span>
          </small>
          <div className="sort">
            Order by
            <select onChange={this.changeDisplay}>
              <option value="default">Select</option>
              <option value="lowestprice">Highest To Lowest</option>
              <option value="highestprice">Lowest To Highest</option>
            </select>
          </div>
        </div>
        {data.products.map(item => {
          return (
            <div className="rightcontainer-item">
              <div className="freeshipping">Free Shipping</div>
              <div className="rightcontainer-itemthumb">
                <img src={`static/products/${item.sku}_1.jpg`} alt="pic" />

                <p className="rightcontainer-itemtitle">{item.title}</p>
                <div className="rightcontainer-itemprice">
                  <div className="val">
                    <small>{item.currencyFormat}</small>
                    <b>{item.price}</b>
                    <span>.90</span>
                  </div>
                  <div className="installment">
                    <span>or {item.installments} x</span>
                    <b>$1.21</b>
                  </div>
                </div>
                <div
                  className="rightcontainer-itembutton"
                  onClick={() => this.addToCart(item)}
                >
                  Add to cart
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Product;

// handle sizes also done not implemented

// handleSize = size => {
//   console.log("handle", size);
//   const filterData = this.state.data.filter(singleData => {
//     return singleData.availableSizes.includes(size);
//   });
//   console.log(filterData);
//   this.setState({ filterData });
// };

// add to cart done not et implented

// <div className={this.state.isCartOpen ? "close-cart" : "cart-section"}>
//   <span className="quantity-box" onClick={this.manageCart}>
//     <img src="static/bag-icon.png" alt="cart-icon"></img>
//     <span className="quantity-content">{this.state.cart.length}</span>
//   </span>
//   <div className={this.state.isCartOpen ? "" : "sho-cart"}>
//     <div className="close-cart-btn" onClick={this.manageCart}>
//       X
//     </div>
//     <div className="cart-content">
//       <div className="cart-header">
//         <span className="bag">
//           <img src="static/bag-icon.png" alt="cart-icon"></img>
//           <span className="bag-quantity">{this.state.cart.length}</span>
//         </span>
//         <span className="header-title">CART</span>
//       </div>

//       {/* mapp these  */}
//       {this.state.cart.map(cartItem => (
//         <div className=".cart-single-item ">
//           <hr className="cart-bar"></hr>
//           <div className="selected-items-box">
//             <div className="delete-item" onClick={this.deleteItem}>
//               {/* <img
//                         src="https://image.flaticon.com/icons/png/512/32/32178.png"
//                         alt="del-icon"
//                       ></img> */}
//             </div>
//             <div className="selected-items-image">
//               <img
//                 src={`static/products/${cartItem.sku}_1.jpg`}
//                 alt={cartItem.title}
//                 className="item-image"
//               ></img>
//             </div>
//             <div className="selected-items-details">
//               <p className="items-title">{cartItem.title}</p>
//               <p className="description">
//                 {cartItem.availableSizes[0]} | {cartItem.style} <br />
//                 Quantity: {cartItem.quantity}
//               </p>
//             </div>
//             <div className="selected-items-price">
//               <p>${cartItem.price * cartItem.quantity}</p>
//               <div>
//                 <button
//                   className="decrease-item-btn"
//                   onClick={() => this.decreaseQuantity(cartItem)}
//                 >
//                   -
//                 </button>
//                 <button
//                   className="increase-item-btn"
//                   onClick={() => this.addQuantity(cartItem)}
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* untill this */}
//       <div className="cart-footer">
//         <div className="cart-total">SUBTOTAL</div>
//         <div className="cart-total-price">
//           <p className="cart-total-price-value">
//             $
//             {this.state.cart.reduce(
//               (acc, item) => acc + item.price * item.quantity,
//               0
//             )}
//             {/* {this.subTotal(item)} */}
//           </p>
//           <small className="cart-total-price-installment">
//             <span>OR UPTO 9 X $ 2.34</span>
//           </small>
//         </div>
//         <div className="cart-buy-btn">checkout</div>
//       </div>
//     </div>
//   </div>
// </div>;
