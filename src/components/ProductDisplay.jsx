import { useContext } from "react";
import { ProductsCard } from "./Products";
import { ProductContext } from "../context/ProductContext";
import { CartPage } from "./CartPage";

export default function ProductDisplay() {
  const {Products = [],cartData = [],CountChange = () => {},price = {},
  totalCount = {}} = useContext(ProductContext);

  return (
    <div className="container mt-5">
        <div className="row">
          <div className="col-8">
          {
            Products.map((data, index) => 
            <ProductsCard key={index} data={data} CountChange={CountChange} />
            )
          }
          </div>
          <div className="col-4">
            <div className="CartPage">
              <div className="Cart-value"><b>CART</b></div>
                <div className="Cart-item"> 
          {
            cartData.length > 0 ?
            cartData.map((result, index) => 
            <CartPage key={index} result={result}/>
            ): <b>"Cart is  Empty"</b>
          }
                </div>
          <div className="Total-amnt">
            <div className="row">
              <div className="col-6">
              <div style={{marginBottom: 5}}>Total Quantity:</div>
              </div>
              <div className="col-6">
              <div style={{marginBottom: 5}}><h6>{totalCount}</h6></div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
              <div style={{marginBottom: 5}}>Total Amount:</div>
              </div>
              <div className="col-6">
              <div style={{marginBottom: 5}}><h6>{price}</h6></div>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
    </div>
  );
}