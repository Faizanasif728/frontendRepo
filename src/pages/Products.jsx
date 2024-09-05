import axios from "axios";
import { useEffect, useState } from "react";
const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
  };

  useEffect(() => {
    console.log("hello");
    fetchProducts();
    console.log("bye");
  }, []);

  return (
    <>
      <h1>Products Page</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {products.map((product) => (
          <div
            key={products.id}
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
          </div>
        ))}
      </div>
    </>
  );
};
export default ProductsPage;
