import Hero from "../components/Hero";


function Home() {
  

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      

      {/* Why HimShakti Section */}
      <section className="bg-green-50 py-12 px-8 mt-10">
        <h2 className="text-3xl font-bold text-center text-green-800">
          Why Choose HimShakti?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8 text-center">
          <div>
            <h3 className="text-xl font-bold">🌾 Fresh & Natural Products</h3>
            <p className="text-gray-600 mt-2">
              We connect producers directly with customers, ensuring fair prices,better quality, and authentic products.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">💚 Healthy Products</h3>
            <p className="text-gray-600 mt-2">
              Natural, chemical-free and nutritious food items.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">🚚 Direct Delivery</h3>
            <p className="text-gray-600 mt-2">
              Farm-fresh products delivered straight from farmers to you
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;