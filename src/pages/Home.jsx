import Hero from "../components/Hero";
import Card from "../components/Cards";

function Home() {
  const featuredProducts = [
    {
      title: "Cinnamon",
      description: "A premium-quality organic spice known for its warm aroma and natural sweetness. It supports digestion and adds rich flavor to food and beverages.",
      image: "/images/Organic Cinnamon.png",
      price: 250,
    },
    {
      title: "Turmeric Powder",
      description: "A powerful golden spice rich in curcumin, known for its immunity-boosting and anti-inflammatory properties. Ideal for cooking and wellness drinks.",
      image: "/images/Turmeric Powder.png",
      price: 100,
    },
    {
      title: "Honey",
      description: "Pure, natural honey collected from chemical-free environments. It is a natural energy booster with antibacterial and healing properties.",
      image: "/images/Honey.png",
      price: 160,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Featured Products Section */}
      <section className="p-2">
        <h2 className="text-3xl font-bold text-center text-green-800">
          Featured Products
        </h2>

        <p className="text-center text-gray-600 mt-2 mb-5">
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredProducts.map((product) => (
            <Card
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;