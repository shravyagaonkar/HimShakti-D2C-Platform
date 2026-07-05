import Hero from "../components/Hero";

function Home() {
  

  return (
     <div className="bg-green-100 min-h-screen">
      {/* Hero Section */}
      <Hero />
      <section className="py-16 ">
  <div className="max-w-7xl mx-auto px-4 ">
    <h2 className="text-4xl font-bold text-center text-green-800">
      Why Choose HimShakti?
    </h2>

    <p className="text-center text-gray-600 mt-3 mb-12">
      We connect rural producers directly with customers while ensuring quality,
      authenticity, and sustainability.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="shadow-lg rounded-xl p-6 text-center border">
        <div className="text-5xl mb-4">🌿</div>
        <h3 className="text-xl font-semibold text-green-700">
          100% Natural
        </h3>
        <p className="text-gray-600 mt-3">
          Organic and handcrafted products made using traditional methods.
        </p>
      </div>

      <div className="shadow-lg rounded-xl p-6 text-center border">
        <div className="text-5xl mb-4">👩‍🌾</div>
        <h3 className="text-xl font-semibold text-green-700">
          Rural Empowerment
        </h3>
        <p className="text-gray-600 mt-3">
          Every purchase supports women entrepreneurs and local communities.
        </p>
      </div>

      <div className="shadow-lg rounded-xl p-6 text-center border">
        <div className="text-5xl mb-4">🚚</div>
        <h3 className="text-xl font-semibold text-green-700">
          Direct Delivery
        </h3>
        <p className="text-gray-600 mt-3">
          Products delivered directly from producers to your doorstep.
        </p>
      </div>

      <div className="shadow-lg rounded-xl p-6 text-center border">
        <div className="text-5xl mb-4">⭐</div>
        <h3 className="text-xl font-semibold text-green-700">
          Quality Assured
        </h3>
        <p className="text-gray-600 mt-3">
          Every product is carefully selected for freshness and quality.
        </p>
      </div>

    </div>
  </div>
</section>
<section className="py-16 ">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-green-800">
      Explore Categories
    </h2>

    <p className="text-center text-gray-600 mt-3 mb-12">
      Browse authentic rural products across different categories.
    </p>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

      <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
        <div className="text-5xl">🌶️</div>
        <h3 className="mt-4 font-semibold">Spices</h3>
      </div>

      <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
        <div className="text-5xl">🍯</div>
        <h3 className="mt-4 font-semibold">Honey</h3>
      </div>

      <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
        <div className="text-5xl">🌾</div>
        <h3 className="mt-4 font-semibold">Millets</h3>
      </div>

      <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
        <div className="text-5xl">🥜</div>
        <h3 className="mt-4 font-semibold">Dry Fruits</h3>
      </div>

      <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
        <div className="text-5xl">🧼</div>
        <h3 className="mt-4 font-semibold">Herbal Products</h3>
      </div>

    </div>

  </div>
</section>

      
    
    </div>
  );
}

export default Home;