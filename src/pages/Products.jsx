import { useEffect, useState } from "react";
import Card from "../components/Cards";

function Products() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setFeaturedProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="p-8 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-green-800">
        Products
      </h2>

      <p className="text-center text-gray-600 mt-2 mb-7">
        Authentic rural products sourced and selected by HimShakti
      </p>

      <div className="flex flex-wrap justify-center gap-5 dark:bg-gray-900 text-green-800">
        {featuredProducts.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;