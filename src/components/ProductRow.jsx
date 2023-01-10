function ProductRow (props) {
    const { products } = props;

    return (
        products.map((eachProduct, i) => {
            return(
                <tbody>
                <tr key={i}>
                    <td>{eachProduct.name}</td>
                    <td>{eachProduct.price}</td>
                </tr>
            </tbody>
            );
        })
    )

    // return (
    //     products.forEach((product) => {
    //      <tbody>
    //         <tr>
    //          <td>{product.name}</td>
    //          <td>{product.price}</td>
    //         </tr>
    //      </tbody>
    //     })
    // );
}

export default ProductRow;