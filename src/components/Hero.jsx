import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-green-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-green-700">
          Bringing Rural Goodness to Every Doorstep
        </h1>

        <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-600">
          Discover handcrafted, organic, and naturally sourced products
          created by skilled rural entrepreneurs. HimShakti bridges the gap
          between local producers and customers, ensuring authenticity,
          quality, and sustainable livelihoods.
        </p>

        <p className="mt-4 text-base sm:text-lg leading-7 text-gray-600">
          From premium spices and pure honey to wholesome grains and herbal
          products, every purchase supports rural communities while bringing
          healthy, traditional products directly to your home.
        </p>

        <div className="mt-10 flex justify-center">
          <button
            onClick={() => navigate("/products")}
            className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Explore Products
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;