import React from "react";
import uuid from "react-uuid";

function ProductRow (props) {
    const { products } = props;
    //const [inStock] = products.inStock;

    return (
        products.map((eachProduct, i) => {
            return(
                <tbody>
                 <tr key={uuid()}>
                  <td style={{color: eachProduct.inStock ? "black" : "red"}}>{eachProduct.name}</td>
                  <td>{eachProduct.price}</td>
                 </tr>
            </tbody>
            );
        })
    );
}

export default ProductRow;