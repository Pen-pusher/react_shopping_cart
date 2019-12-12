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
      case "lowestprice":
        this.setState({ currentData: this.dataSort() });
        break;
      default:
        this.setState({ currentData: [...data.products] });
        break;
    }
  };

  addToCart = val => {
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
              <option value="lowestprice">Lowest To Highest</option>
              <option value="highestprice">Highest To Lowest</option>
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
