import { useState } from "react";
import jsonData from "./../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductPage () {
    const [products] = useState(jsonData);
    const productsCopy = [...products];
    const [filteredProducts, setFilteredProducts] = useState("");

    let filteredProductsArray = productsCopy.filter((product) => {
        return product.name.toLowerCase().includes(filteredProducts)
    })

    function handleSearch(searchTerm) {
        if (searchTerm.length>0){
            setFilteredProducts(filteredProductsArray);
            }
        };
    
    return(
        <div>
            <h1>IronStore</h1>
            <SearchBar setFilteredProducts={setFilteredProducts} handleSearch={handleSearch}/>
            <ProductTable products={filteredProductsArray}/>
        </div>
    )
}

export default ProductPage;