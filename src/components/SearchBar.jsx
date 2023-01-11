import { useState } from "react";

function SearchBar (props) {
    const { setFilteredProducts, handleSearch } = props;
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    }

    return (
        <div>
            <h4>Search</h4>
            <input 
            type="text" 
            name="search" 
            placeholder="Search for a product" 
            value={searchTerm} 
            onChange={(event) => {
                handleChange(event);
                handleSearch(searchTerm);
                setFilteredProducts(searchTerm);
                }
              }/>
        </div>  
    )
}

export default SearchBar;