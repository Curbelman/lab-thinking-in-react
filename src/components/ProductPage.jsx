import { useState } from "react";
import jsonData from "./../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductPage () {
    const [products] = useState(jsonData);
    const productsCopy = [...products];
    const [filterText, setFilterText] = useState("");
    const [shownProducts, setShownProducts] = useState("");

    let filteredProducts = productsCopy.filter((product) => {
        return product.name.toLowerCase().includes(filterText)
    })

    function handleSearch() {
        setFilterText(filteredProducts);
    }
    
    return(
        <div>
            <h1>IronStore</h1>
            <SearchBar setFilterText={setFilterText} handleSearch={handleSearch}/>
            <ProductTable products={filteredProducts}/>
        </div>
    )
}

export default ProductPage;