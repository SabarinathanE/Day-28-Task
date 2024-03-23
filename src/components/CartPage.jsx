import { useState,useContext } from "react"
import { ProductContext } from "../context/ProductContext";

export function CartPage({result = []}) {
  let {totalCount = {},setTotalCount = () => {},price = {},setPrice = () => {}} = useContext(ProductContext);
  const [Count,setCount] = useState(1);

console.log(totalCount)
function ClockCountChange() {
    setCount(Count + 1);
    setTotalCount(totalCount + 1)
    setPrice(result.price + price)
    console.log(result.price)
}

function CounterCountChange() {
if (Count > 0){
    setCount(Count - 1);
    setTotalCount(totalCount - 1)
    setPrice(price - result.price)
}}

    return (
      <div className="row mb-2 Cart-line">
        <div className="col-6">
          {result.title}: 
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-3">
              <button onClick={CounterCountChange}>-</button>
            </div>
            <div className="col-3">
              <h3>{Count}</h3>
            </div>
            <div className="col-3">
              <button onClick={ClockCountChange}>+</button>
            </div>
          </div>
        </div>
      </div>
    )
}
