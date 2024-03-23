import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext({
    Products: [],
    CountChange: () => {},
    price: 0,
    setPrice: () => {},
    cartData: [],
    totalCount: 0,
    setTotalCount: () => {}
 })

export default function CreateContextProvider({children}) {
   const [Products, setProducts] = useState();
   const [price,setPrice] = useState(0);
   const [totalCount,setTotalCount] = useState(0);
   const [cartData,setCartData] = useState([]);
 
   function CountChange(data) {
     const cartdataCopy = [...cartData];
     const cartdataFind = cartdataCopy.find((d) => d.id == data.id)
     if (!cartdataFind) {
       cartdataCopy.push(data)
       setPrice(data.price + price)
       setTotalCount(totalCount + 1)
       setCartData(cartdataCopy)
     }
 }
 
    useEffect(() => {
        fetch("http://localhost:5173/data.json")
        .then((result) => result.json())
        .then((output) => setProducts(output.products))
        return () => {};
    },[])

    return (
        <ProductContext.Provider value={{Products,
            cartData,
        CountChange,price,totalCount,
        setTotalCount,setPrice}}>
            {children}
        </ProductContext.Provider>
    )
}