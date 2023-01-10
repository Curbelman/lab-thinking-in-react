import ProductRow from "./ProductRow";

function ProductTable () {
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody>
            <ProductRow />
        </tbody>
    </table>
}

export default ProductTable;