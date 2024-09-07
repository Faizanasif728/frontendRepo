import axios from "axios";
import { useEffect, useState } from "react";
const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [userInput, setUserInput] = useState("");
  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
    setSearchedProducts(response.data);
  };
  const searchHandler = (e) => {
    const userInput = e.target.value;
    const searchResult = products.filter((item, index) => {
      if (item.title.toLowerCase().includes(userInput.toLowerCase())) {
        return true;
      }
    });
    setSearchedProducts(searchResult);
  };
  const deleteItem = (id) => {
    const updatedItems = products.filter((product) => {
      return product.id !== id;
    });
    setProducts(updatedItems);
    setSearchedProducts(updatedItems);
    setUserInput(userInput);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Products Page</h1>
      <input onChange={searchHandler} placeholder="Search products" />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {searchedProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "16px",
              margin: "16px",
              width: "250px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2>{product.title}</h2>
            <img
              src={product.image}
              alt={product.title}
              width={100}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                marginBottom: "8px",
              }}
            ></img>
            <p>{product.description}</p>
            <p style={{ fontWeight: "bold" }}>Price: ${product.price}</p>
            <button onClick={() => deleteItem(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};
export default ProductsPage;
