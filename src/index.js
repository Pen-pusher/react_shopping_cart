import React from "react";
import { render } from "react-dom";

import data from "./data.json";
import "./style/style.scss";

class App extends React.Component {
  render() {
    return (
      <div className="filters">
        <h4 className="title">Sizes</h4>
        <div className="filters-available-size">
          <label>
            <input type="checkbox" value="XS" />
            <span className="checkmark">XS</span>
          </label>
        </div>
        <div className="filters-available-size">
          <label>
            <input type="checkbox" value="S" />
            <span className="checkmark">S</span>
          </label>
        </div>
        <div className="filters-available-size">
          <label>
            <input type="checkbox" value="M" />
            <span className="checkmark">M</span>
          </label>
        </div>
        <div className="filters-available-size">
          <label>
            <input type="checkbox" value="ML" />
            <span className="checkmark">ML</span>
          </label>
        </div>
        <div className="filters-available-size">
          <label>
            <input type="checkbox" value="L" />
            <span className="checkmark">L</span>
          </label>
        </div>
        <div className="filters-available-size">
          <label>
            <input type="checkbox" value="XL" />
            <span className="checkmark">XL</span>
          </label>
        </div>
        <div className="filters-available-size">
          <label>
            <input type="checkbox" value="XXL" />
            <span className="checkmark">XXL</span>
          </label>
        </div>
        <div className="products">
          <ul className="ul">{data.products.map(product => product.id)}</ul>
          <img src="/static/{data.products.map(product => `${product.sku} +' _1.jpg'`)}" />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
