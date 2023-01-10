function ProductRow (props) {
    const { products } = props;

    return (
        products.forEach((product) => {
         <tbody>
            <tr>
             <td>{product.name}</td>
             <td>{product.price}</td>
            </tr>
         </tbody>
        })
    );
}

export default ProductRow;