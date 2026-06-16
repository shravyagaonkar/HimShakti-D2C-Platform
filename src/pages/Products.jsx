import Card from "../components/Cards";

function Products() {
  const featuredProducts = [
    {
      title: "Cinnamon",
      description:
        "A premium-quality organic spice known for its warm aroma and natural sweetness. It supports digestion and adds rich flavor to food and beverages.",
      image: "/images/Organic Cinnamon.png",
      price: 250,
    },
    {
      title: "Turmeric Powder",
      description:
        "A powerful golden spice rich in curcumin, known for its immunity-boosting and anti-inflammatory properties. Ideal for cooking and wellness drinks.",
      image: "/images/Turmeric Powder.png",
      price: 100,
    },
    {
      title: "Honey",
      description:
        "Pure, natural honey collected from chemical-free environments. It is a natural energy booster with antibacterial and healing properties.",
      image: "/images/Honey.png",
      price: 160,
    },
  ];

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-center text-green-800">
        Products
      </h2>

      <p className="text-center text-gray-600 mt-2 mb-7">
        Authentic rural products sourced and selected by HimShakti
      </p>

      <div className="flex flex-wrap justify-center gap-5">
        {featuredProducts.map((product, index) => (
          <Card
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